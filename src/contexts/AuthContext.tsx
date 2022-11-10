import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/router";

interface IUser {
    id?: string;
    name?: string;
    email: string;
    password?: string;
    avatar?: string;
}

interface AuthContext {
    user: IUser;
    signIn(email: string, password: string): Promise<boolean>;
    signOut();
}

const AuthContext = createContext({} as AuthContext);

function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState<IUser>(null);

    useEffect(() => {
        const { 'transduarte.token': token, 'transduarte.user': user } = parseCookies();
        if (token && user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const setAuthCookie = (name: string, data: string) => {
        setCookie(undefined, name, data, { maxAge: 60 * 60 * 1, path: '/', })
    }

    const signIn = async (email: string, password: string) => {
        try {
            const response = await api.post('auth/standard', {
                email,
                password
            }).then(res => res.data);
            if (response.success) {
                setAuthCookie('transduarte.token', response.token);
                api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
                setAuthCookie('transduarte.user', JSON.stringify(response.user));
                setUser(response.user);
                router.push('/admin');
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
    
    const signOut = () => {
        setUser(null);
        destroyCookie(undefined, 'transduarte.token');
        destroyCookie(undefined, 'transduarte.user');
        router.push('/login');
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

export {
    useAuth,
    AuthProvider
}