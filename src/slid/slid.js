import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from './slidImg/img1.jpg' 
import img2 from './slidImg/img2.jpg'
import img3 from './slidImg/img3.jpg'  
import img4 from './slidImg/img4.jpg' 
import img5 from './slidImg/img5.jpg' 
import img6 from './slidImg/img6.jpg' 
import img7 from './slidImg/img7.jpg' 
import img8 from './slidImg/img8.jpg' 
import { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination" 
import 'swiper/css/autoplay' 
import "swiper/css/navigation" 
import "swiper/css/pagination"
import "./slid.css" 

// import required modules 
import { EffectCoverflow, Pagination , Autoplay , Navigation } from "swiper";

export default function SwiperSlid() { 
  return ( 
      <Swiper modules={[EffectCoverflow, Pagination , Autoplay , Navigation  ]} 
        loop={true} 
        slidesPerView={ 3 } 
        autoplay = {{ delay: 2000 }} 
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={ false } // sa vor tru lini araji nkarn cuyc kta hakaraak dpqu m kntron 
        // slidesPerView={"auto"} 
        coverflowEffect={{
          rotate: 40, 
          stretch: 0, 
          depth: 100,
          modifier: 1 , // inch dzvi lini tequtyunn 
          slideShadows: true,
        }}
        pagination={true} 
        className="mySwiper" 
        navigation 
      > 
        
        <SwiperSlide > <div className="q"> <div className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </div> <img src={img1} />  Slide 1   </div> </SwiperSlide>
        <SwiperSlide > <div className="q"> <div className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </div> <img src={img2} /> Slide 2 </div> </SwiperSlide>
        <SwiperSlide > <div className="q"> <div className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </div> <img src={img3} /> Slide 3 </div> </SwiperSlide>  
        <SwiperSlide > <div className="q">  <div className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </div> <img src={img4} /> Slide 4 </div> </SwiperSlide>
        <SwiperSlide > <div className="q"> <div className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </div> <img src={img5} /> Slide 5 </div> </SwiperSlide>
        <SwiperSlide > <div className="q">  <div className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </div> <img src={img6} /> Slide 6 </div> </SwiperSlide>
        <SwiperSlide > <div className="q"> <div className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </div> <img src={img7} /> Slide 7 </div> </SwiperSlide>
        <SwiperSlide > <div className="q"> <div className="info"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </div> <img src={img8} /> Slide 8 </div> </SwiperSlide> 
      </Swiper> 
  ) 
}
