import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import carousel1 from '../assets/img/banner1.png';
import carousel2 from '../assets/img/banner2.png';
import carousel3 from '../assets/img/banner3.png';
import carousel4 from '../assets/img/banner4.png';


const Carousel = () => {
  const banners = [carousel1,carousel2,carousel3,carousel4];
    return(
        <>
           <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper mt-4 px-2"
      >
        {
          banners.map((banner)=>{
            return <SwiperSlide>
            <img src={banner} className="w-100" style={{borderRadius:'15px 15px 0 0'}}/>
            <marquee behavior="" direction="left" style={{background:'#56bcd3',borderRadius:'0 0 15px 15px '}}>Welcome from Marquee !!! </marquee>
          </SwiperSlide>
          })
        }
        
      </Swiper>
        </>
    )
}

export default Carousel;