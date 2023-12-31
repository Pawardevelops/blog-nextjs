import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";

export default function Feature(){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <strong>Hey,Sachin pawar here!</strong> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                   <Image src={"/images/p1.jpg"} alt="p1" fill/> 
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod officiis at ipsam blanditiis vitae voluptatem ab velit consequuntur. Adipisci, veritatis voluptatum!  dolor veniam non esse sint sequi repellat, ratione cum. Sunt, ipsum! Aliquid in, impedit hic consequatur ducimus sint at eaque corporis explicabo sed rem quo dolore sequi commodi vero, quas amet eum.
                    </p>
                    <button className={styles.button }>Read More</button>
                </div>
            </div>
        </div>
    )
}