import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import style from "./index.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CarouselWork() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        draggable
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        className={style.swiper}
      >
        <SwiperSlide className={style.swiperSlide}>
          <div className={style.cardItem}>
            <h1>Testasdasd</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <div className={style.cardItem}>
            <h1>Testasdasd</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <div className={style.cardItem}>
            <h1>Testasdasd</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <div className={style.cardItem}>
            <h1>Testasdasd</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <div className={style.cardItem}>
            <h1>Testasdasd</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
