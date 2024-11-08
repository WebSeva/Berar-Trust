import Head from "next/head";
import Navbar from "@/components/navbar";
import styles from '@/styles/Projects.module.css';
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";
import { useState,useEffect } from "react";
export default function Projects (){
        const [websiteData,setWebsiteData] = useState({title:"",description:""});
        useEffect(()=>{
            const readData = async ()=>{
                const response = await fetch(`/api/getdata`);
                if(response.ok){
                      console.log('trying to fetch the data');
                      const data = await response.json();
                      console.log(data.message);
                      setWebsiteData(data.message);
    
                }
          }
          readData();
        },[])
    return(
        <>  
            <Head>
                {websiteData !== null && (<title>{websiteData.name}</title>)}
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
                </Head>

                <div className={styles.container}>
                <Assistant/>
                    <div className={styles.topDiv}>
                         <Navbar/>
                    </div>
                    <div className={styles.newsDiv}>
                            <div className={styles.newsDiv_top}>

                                        <h2 className={styles.newsDiv_top_header}>Projects by {websiteData.name}</h2>

                            </div>
                            <div className={styles.newsDiv_bottom}>
                       
                                    <div className={styles.newsDiv_block_second}>
                                                <div className={styles.newsDiv_block_second_left}>
                                                            <div className={styles.newsDiv_block_second_left_photo}>
                                                                    <img src="/photo7.jpeg" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                                            </div>
                                                </div>

                                                <div className={styles.newsDiv_block_second_right}>
                                                        <div className={styles.newsDiv_block_second_right_top}>
                                                            <h2 className={styles.newsDiv_block_header}>{websiteData.project_one_title}</h2>
                                                            <div className={styles.newsDiv_block_spacer}></div>
                                                        </div>

                                                        <div className={styles.newsDiv_block_second_right_bottom}>
                                                            <p>{websiteData.project_one_description}</p>
                                                        </div>
                                                </div>
                                                
                                                {/* <br/> we run a school and implement various developmental activities in 50 villages, aiming to provide quality education and reduce rural migration. */}
                                    </div>
                                    <div className={styles.newsDiv_block}>
                                            <div className={styles.newsDiv_block_left}>
                                                    <div className={styles.newsDiv_block_left_top}>
                                                        <h2 className={styles.newsDiv_block_header}>{websiteData.project_two_title}</h2>
                                                        <div className={styles.newsDiv_block_spacer}></div>
                                                    </div>

                                                    <div className={styles.newsDiv_block_left_bottom}>
                                                        <p>{websiteData.project_two_description}</p>
                                                    </div>
                                            </div>
                                            <div className={styles.newsDiv_block_right}>
                                                        <div className={styles.newsDiv_block_right_photo}>
                                                                <img src="/office.jpg" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                                        </div>
                                            </div>
                                    </div>
                                    <div className={styles.newsDiv_block_second}>
                                                <div className={styles.newsDiv_block_second_left}>
                                                            <div className={styles.newsDiv_block_second_left_photo}>
                                                                    <img src="/image2.jpg" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                                            </div>
                                                </div>

                                                <div className={styles.newsDiv_block_second_right}>
                                                        <div className={styles.newsDiv_block_second_right_top}>
                                                            <h2 className={styles.newsDiv_block_header}>{websiteData.project_three_title}</h2>
                                                            <div className={styles.newsDiv_block_spacer}></div>
                                                        </div>

                                                        <div className={styles.newsDiv_block_second_right_bottom}>
                                                            <p>{websiteData.project_three_description}</p>
                                                        </div>
                                                </div>
                                                
                                                {/* <br/> we run a school and implement various developmental activities in 50 villages, aiming to provide quality education and reduce rural migration. */}
                                    </div>
                                    <div className={styles.newsDiv_block}>
                                            <div className={styles.newsDiv_block_left}>
                                                    <div className={styles.newsDiv_block_left_top}>
                                                        <h2 className={styles.newsDiv_block_header}>{websiteData.project_four_title}</h2>
                                                        <div className={styles.newsDiv_block_spacer}></div>
                                                    </div>

                                                    <div className={styles.newsDiv_block_left_bottom}>
                                                        <p>{websiteData.project_four_description}</p>
                                                    </div>
                                            </div>
                                            <div className={styles.newsDiv_block_right}>
                                                        <div className={styles.newsDiv_block_right_photo}>
                                                                <img src="/upliftment.jpeg" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                                        </div>
                                            </div>
                                    </div>
                                    <div className={styles.newsDiv_block_second}>
                                                <div className={styles.newsDiv_block_second_left}>
                                                            <div className={styles.newsDiv_block_second_left_photo}>
                                                                    <img src="/image.jpg" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                                            </div>
                                                </div>

                                                <div className={styles.newsDiv_block_second_right}>
                                                        <div className={styles.newsDiv_block_second_right_top}>
                                                            <h2 className={styles.newsDiv_block_header}>{websiteData.project_five_title}</h2>
                                                            <div className={styles.newsDiv_block_spacer}></div>
                                                        </div>

                                                        <div className={styles.newsDiv_block_second_right_bottom}>
                                                            <p>{websiteData.project_five_description}</p>
                                                        </div>
                                                </div>
                                                
                                                {/* <br/> we run a school and implement various developmental activities in 50 villages, aiming to provide quality education and reduce rural migration. */}
                                    </div>
                                    <div className={styles.newsDiv_block}>
                                            <div className={styles.newsDiv_block_left}>
                                                    <div className={styles.newsDiv_block_left_top}>
                                                        <h2 className={styles.newsDiv_block_header}>{websiteData.project_six_title}</h2>
                                                        <div className={styles.newsDiv_block_spacer}></div>
                                                    </div>

                                                    <div className={styles.newsDiv_block_left_bottom}>
                                                        <p>{websiteData.project_six_description}</p>
                                                    </div>
                                            </div>
                                            <div className={styles.newsDiv_block_right}>
                                                        <div className={styles.newsDiv_block_right_photo}>
                                                                <img src="/khadi.webp" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                                        </div>
                                            </div>
                                    </div>
                                    
                                   
                            </div>
                    </div>
                    <Footer/>
                </div>
        </>
    )
}