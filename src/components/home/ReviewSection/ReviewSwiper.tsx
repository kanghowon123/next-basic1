"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { REVIEW_ITEMS } from "@/constants/reviews";
export default function ReviewSwiper() {
  return (
    <div className="max-w-[80%] mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {REVIEW_ITEMS.map((review) => (
          <SwiperSlide key={review.id}>
            <div
              className={`p-5 rounded-lg ${review.bgColor} ${review.color} flex flex-col gap-2`}
            >
              <h3 className="font-bold text-lg">{review.title}</h3>
              {review.content.split("\n").map((line, index) => (
                <p key={index} className="text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
