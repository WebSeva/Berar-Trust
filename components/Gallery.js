import React,{useRef} from 'react';
import styles from '@/styles/Gallery.module.css';
export default function Gallery () {
    const galleryRef = useRef(null);

    const scrollLeft = ()=>{

    };

    const scrollRight = ()=>{

    };

    return(
        <div className={styles.galleryContainer}>
              
                <div className={styles.gallery} ref={galleryRef}>
                    <img src='/photo1.jpeg' className={styles.galleryImage} width={200} height={200}/>
                    <img src='/photo2.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/photo3.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/photo4.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/photo5.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/photo7.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/upliftment.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/projectspage.JPG' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/image2.jpg' className={styles.galleryImage} width={150} height={200}/>

                </div>
              
        </div>
    )
}