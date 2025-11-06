import Image from "next/image";

import { REVIEW_LEFT_ITEMS, REVIEW_RIGHT_ITEMS } from "@/constants/product";
import { IMAGES } from "@/constants/images";
import Button from "@/components/common/Button/Button";

export default function ReviewTop() {
  return (
    <div>
      <div className="text-center">
        <p className="md:text-[20px] text-[14px]">
          앨리스 모바일은 차근차근 신뢰를 쌓아가고 있어요
        </p>
        <p className="md:text-[36px] text-[20px] font-bold text-[#404040] py-2.5 pb-10">
          5만명의 사람들이 앨리스를 찾았어요
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <ul className="flex flex-col gap-3">
            {REVIEW_LEFT_ITEMS.map((item) => (
              <li
                key={item.id}
                className={`min-h-[173px] flex rounded-3xl ${item.background}`}
              >
                <p
                  className={`w-1/3 text-center flex flex-col justify-center font-bold text-[20px] ${item.color}`}
                >
                  {item.title}
                </p>
                <div
                  className={`w-2/3 flex flex-col justify-center gap-1 text-[18px] ${item.color}`}
                >
                  <p>{item.content1}</p>
                  <p>{item.content2}</p>
                  <p>{item.content3}</p>
                  <p>{item.content4}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="flex flex-col gap-3">
            <div className="flex justify-center">
              <Image
                src={IMAGES.airplaneImage}
                alt="비행기 이미지"
                className="w-auto h-11"
              />
            </div>
            {REVIEW_RIGHT_ITEMS.map((item) => (
              <li
                key={item.id}
                className={`flex rounded-3xl min-h-[173px] ${item.background}`}
              >
                <p className="w-1/3 text-center font-bold text-[20px] flex flex-col justify-center">
                  {item.title}
                </p>
                <div className="w-2/3 flex flex-col justify-center gap-1 text-[18px]">
                  <p>{item.content1}</p>
                  <p>{item.content2}</p>
                  <p>{item.content3}</p>
                </div>
              </li>
            ))}
          </ul>
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
