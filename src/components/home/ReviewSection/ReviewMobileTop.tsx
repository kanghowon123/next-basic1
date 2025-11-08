import Button from "@/components/common/Button/Button";
import ReviewSwiper from "./ReviewSwiper";

export default function ReviewMobileTop() {
  return (
    <div>
      <div className="text-center">
        <p className="text-[14px]">
          앨리스 모바일은 차근차근 신뢰를 쌓아가고 있어요
        </p>
        <p className="text-[20px] font-bold text-[#404040] py-2.5 pb-10">
          5만 명이 앨리스를 찾았어요!
        </p>
      </div>
      <div>
        <ReviewSwiper />
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
