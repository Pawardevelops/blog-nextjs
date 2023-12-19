import Link from "next/link";
import styles from "./authlinks.module.css"

export default function AuthLinks() {
    const status = "notauthenticated";
    return (
         <>
        {status=="notauthenticated" ? 
            (<Link href={"/login"}>Login</Link>) :
            (
            <>
            <Link href={"/login"}>Write</Link>
            <span style={styles.link}>Logout</span>
            </>
            )
        }
        </>
    )
}