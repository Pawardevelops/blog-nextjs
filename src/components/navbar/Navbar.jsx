import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

export default function Navbar(){

    return(
        <nav className={styles.container}>
            <div className={styles.social}>
                <Image src={"/images/facebook.png"} alt="facebook logo" width={24} height={24} />
                <Image src={"/images/instagram.png"} alt="instagram logo" width={24} height={24} />
                <Image src={"/images/tik-tok.png"} alt="tiktok logo" width={24} height={24} />
                <Image src={"/images/youtube.png"} alt="youtube     logo" width={24} height={24} />
            </div>
            <div className={styles.logo}>
                BlogBlog
            </div>
            <ThemeToggle/>
            <div className={styles.links}>
                <Link href={"/"}>HomePage</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>About</Link>
                <AuthLinks/>
            </div>
        </nav>
    )
}