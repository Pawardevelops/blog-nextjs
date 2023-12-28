"use client";

import Link from "next/link";
import styles from "./authlinks.module.css"
import { useState } from "react";

export default function AuthLinks() {
    const [open, setOpen] = useState(false);
    

    const status = "notauthenticated";
    return (
        <>
            {status == "notauthenticated" ?
                (<Link href={"/login"}>Login</Link>) :
                (
                    <>
                        <Link href={"/login"}>Write</Link>
                        <span style={styles.link}>Logout</span>
                    </>
                )
            }
            <div className={styles.burger} onClick={()=>setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>

            {
                open && (<div className={styles.responsiveMenu}>
                    <Link href={"/"} className={styles.link}>HomePage</Link>
                    <Link href={"/"} className={styles.link}>Contact</Link>
                    <Link href={"/"} className={styles.link}>About</Link>

                    {status == "notauthenticated" ?
                        (<Link href={"/login"}>Login</Link>) :
                        (
                            <>
                                <Link href={"/login"}>Write</Link>
                                <span style={styles.link}>Logout</span>
                            </>
                        )
                    }
                </div>)

            }
        </>
    )
}