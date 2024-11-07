import Head from "next/head";
import Navbar from "@/components/navbar";
import styles from '@/styles/AboutUs.module.css';
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Assistant from "@/components/Assistant";
import DocumentGallery from "@/components/DocumentGallery";
import {useState,useEffect} from 'react';
export default function AboutUs (){
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
                <div className={styles.topDiv} style={{backgroundImage:'/mission.jpg'}}>
                         <Navbar/>
                </div>
                        
                <div className={styles.newsDiv}>
                  <div className={styles.newsDiv_top}>

                        {websiteData.title !== null && (     <h2 className={styles.newsDiv_top_header}>Learn About {websiteData.name}</h2>)}

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
                                                <h2 className={styles.newsDiv_block_header}>Our Mission</h2>
                                                <div className={styles.newsDiv_block_spacer}></div>
                                            </div>

                                            <div className={styles.newsDiv_block_second_right_bottom}>
                                                <p className={styles.newsDiv_block_paragraph}>{websiteData.mission}</p>
                                            </div>
                                    </div>
                                    {/* <br/> we run a school and implement various developmental activities in 50 villages, aiming to provide quality education and reduce rural migration. */}
                        </div>

                        <div className={styles.newsDiv_block}>
                                <div className={styles.newsDiv_block_left}>
                                        <div className={styles.newsDiv_block_left_top}>
                                            <h2 className={styles.newsDiv_block_header}>Our Vision</h2>
                                            <div className={styles.newsDiv_block_spacer}></div>
                                        </div>

                                        <div className={styles.newsDiv_block_left_bottom}>
                                            <p className={styles.newsDiv_block_paragraph}>{websiteData.vision}</p>
                                        </div>
                                </div>
                                <div className={styles.newsDiv_block_right}>
                                            <div className={styles.newsDiv_block_right_photo}>
                                                    <img src="/photo1.jpeg" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                            </div>
                                </div>
                        </div>

                       





                                

                    </div>
                       

                </div>
                <div className={styles.infoDiv}>
                            {/* <div className={styles.infoDiv_top}>
                                <h2 className={styles.infoDiv_top_header}>Our Capacity And Experience</h2>
                                <div className={styles.infoDiv_spacer}></div>
                                <div className={styles.infoDiv_top_description}>
                                    <p className={styles.infoDiv_top_paragraph}>{websiteData.ngo_experience}</p>
                                </div>
                            </div> */}
                            <div className={styles.infoDiv_bottom}>
                                 <h2 className={styles.infoDiv_top_header}>Our Values</h2>
                                <div className={styles.infoDiv_spacer}></div>
                                <div className={styles.infoDiv_top_description}>
                                    <p className={styles.infoDiv_top_paragraph}>At {websiteData.name}, we encourage the following values to be upheld both individually and organizationally:

                                        </p>
                                    <ul className={styles.infoDiv_bottom_list}>
                                        {
                                           websiteData.values &&  websiteData.values.map((item)=>{
                                                return(
                                                    <li >{item}</li>
                                      
                                                    
                                                )
                                            })
                                        }
                                      
                                    </ul>
                                </div>
                            </div>
                            

                </div>
                <div className={styles.galleryHolder}>
                    <div className={styles.galleryHolder_top}>
                        <div className={styles.galleryHolder_top_content}>
                         <h2 className={styles.galleryHolder_top_header}>Photo Gallery</h2>
                        </div>
                    </div>
                     <Gallery/>

                    
                </div>

                {/* <div className={styles.galleryHolder}>
                    <div className={styles.galleryHolder_top}>
                        <div className={styles.galleryHolder_top_content}>
                         <h2 className={styles.galleryHolder_top_header}>Certifications & Reports</h2>
                        </div>
                    </div>
                     <DocumentGallery/>

                    
                </div> */}
                
                <Footer/>
            
            </div>
        </>
    )
}
