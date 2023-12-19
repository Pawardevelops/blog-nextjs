"use client";

import Image from "next/image"
import styles from "./themeToggle.module.css"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle(){
    const theme= useContext(ThemeContext);
    console.log(theme)
    return (
        <div className={styles.container}>
            <Image src="/images/moon.png" width={14} height={14} alt="moon"  />
            <div className={styles.ball}></div>
            <Image src="/images/sun.png" alt="sun" width={14} height={14}  />
        </div>
    )
}