import Image from "next/image";

import { REVIEW_ITEMS } from "@/constants/reviews";
import { IMAGES } from "@/constants/images";
import Button from "@/components/common/Button/Button";
import ReviewCard from "./ReviewCard";

export default function ReviewTop() {
  return (
    <div>
      <div className="text-center">
        <p className="text-[20px]">
          앨리스 모바일은 차근차근 신뢰를 쌓아가고 있어요
        </p>
        <p className="text-[36px] font-bold text-[#404040] py-2.5 pb-10">
          5만명의 사람들이 앨리스를 찾았어요
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 max-w-5xl mx-auto">
        <div className="flex flex-col gap-3">
          <ReviewCard review={REVIEW_ITEMS[0]} />
          <ReviewCard review={REVIEW_ITEMS[1]} />
          <ReviewCard review={REVIEW_ITEMS[2]} />
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex justify-center">
            <Image
              src={IMAGES.airplaneImage}
              alt="비행기 이미지"
              className="w-auto h-11"
            />
          </div>
          <ReviewCard review={REVIEW_ITEMS[3]} />
          <ReviewCard review={REVIEW_ITEMS[4]} />
        </div>
      </div>
      <div className="pt-20 w-full text-center">
        <Button
          href="#"
          size="lg"
          customClass="text-[#00e3af] border-[#00e3af] hover:bg-[#00e3af]"
        >
          <span className="font-bold">N </span>리뷰 보러가기
        </Button>
      </div>
    </div>
  );
}
