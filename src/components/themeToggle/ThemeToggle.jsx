"use client";

import Image from "next/image"
import styles from "./themeToggle.module.css"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle(){
    const {theme,toggle}= useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}
        style={theme=="dark" ? 
        {backgroundColor:"white"} : {backgroundColor:"#0f172a"}}
        >
            <Image src="/images/moon.png" width={14} height={14} alt="moon"  />
            <div className={styles.ball} style={theme==="dark" ? 
                {left:0,backgroundColor:"#0f172a"} : 
                {right:0,backgroundColor:"white"}}>
            </div>
            <Image src="/images/sun.png" alt="sun" width={14} height={14}  />
        </div>
    )
}