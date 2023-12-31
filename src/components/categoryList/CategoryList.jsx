import React from "react";
import styles from "./categorylist.module.css"
import Link from "next/link";
import Image from "next/image";

export default function CategoryList(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>Popular Categories</div>
            <div className={styles.categories}>
                <div className={styles.category}>
                    <Link href={`/blog?cat=style`} className={`${styles.Category} ${styles.style}`}>
                        <Image 
                            src={"/images/style.png"}
                            alt="style"
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Style
                    </Link>
                    <Link href={`/blog?cat=fashion`} className={`${styles.Category} ${styles.fashion}`}>
                        <Image 
                            src={"/images/fashion.png"}
                            alt="style"
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Fashion
                    </Link>
                    <Link href={`/blog?cat=food`} className={`${styles.Category} ${styles.food}`}>
                        <Image 
                            src={"/images/food.png"}
                            alt="style"
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Food
                    </Link>
                    <Link href={`/blog?cat=travel`} className={`${styles.Category} ${styles.travel}`}>
                        <Image 
                            src={"/images/travel.png"}
                            alt="style"
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Travel
                    </Link>
                    <Link href={`/blog?cat=culture`} className={`${styles.Category} ${styles.culture}`}>
                        <Image 
                            src={"/images/culture.png"}
                            alt="style"
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Culture
                    </Link>
                    <Link href={`/blog?cat=coding`} className={`${styles.Category} ${styles.coding}`}>
                        <Image 
                            src={"/images/coding.png"}
                            alt="style"
                            width={32}
                            height={32}
                            className={styles.image}
                        />
                        Coding
                    </Link>
                </div>
            </div>
        </div>
    )
}