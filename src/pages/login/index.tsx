import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles.module.scss";

export default function Login() {
    const { signIn } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await signIn(email, password);
            if (response) {
                {error && setError(true);}
                router.push('/admin');
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <span className={styles.title}>Login</span>
                <div className={styles.input_box}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required value={email} onChange={({ target }) => setEmail(target.value)} />
                </div>
                <div className={styles.input_box}>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" required value={password} onChange={({ target }) => setPassword(target.value)} />
                </div>
                {error && <span className={styles.error}>Dados inválidos!</span>}
                <button className={styles.button}>Entrar</button>
            </form>
        </div>
    )
}