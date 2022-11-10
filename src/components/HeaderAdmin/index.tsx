import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { FaSignOutAlt } from "react-icons/fa"
import styles from "./styles.module.scss";
import { useAuth } from "../../contexts/AuthContext";

export function HeaderAdmin() {
    const {user, signOut} = useAuth();
    return (
        <header className={styles.header}>
                <nav className={styles.navbar}>
                    <Link href={'/'}>
                        <a style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src={logo}
                                alt=""
                            />
                        </a>
                    </Link>
                    {user && <div className={styles.user_wrapper}>
                        <span>{user.name}</span>
                            <button style={{ display: 'flex', alignItems: 'center' }} className={styles.signout} onClick={signOut}>
                                <FaSignOutAlt
                                    color="#fff"
                                />
                            </button>
                    </div>}
                </nav>
            </header>
    )
}