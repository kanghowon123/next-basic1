"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { REVIEW_SWIPER_ITEMS } from "@/constants/reviews";
export default function ReviewSwiper() {
  return (
    // <div className="max-w-[80%] mx-auto">
    //   <Swiper
    //     loop={true}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //       bulletActiveClass: "!w-[20px] !rounded-2xl",
    //     }}
    //     modules={[Autoplay, Pagination]}
    //     className="mySwiper"
    //   >
    //     {REVIEW_SWIPER_ITEMS.map((item) => (
    //       <SwiperSlide key={item.id}>
    //         <div>
    //           <Image src={item.image} alt="리뷰 이미지" />
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    <Swiper
      loop={true}
      spaceBetween={100}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet duration-300 transition-all",
        bulletActiveClass:
          "swiper-pagination-bullet-active !bg-[#cecece] !w-[20px] !rounded-[10px]",
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {REVIEW_SWIPER_ITEMS.map((item) => (
        <SwiperSlide>
          <div className="p-10 w-full">
            <Image src={item.image} alt="리뷰 이미지" className="w-full" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
