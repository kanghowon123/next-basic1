import Image from "next/image";
import { IMAGES } from "@/constants/images";
import Button from "@/components/common/Button/Button";

export default function HomeFiMainProductCard() {
  return (
    <>
      <div>
        <Image
          src={IMAGES.shopSubTitleImage}
          alt="wifi|HomeFi 국내 이미지"
          className="my-5 h-9 w-auto"
        />
      </div>
      <div className="main-card bg-white flex py-10 px-5 h-[470px] rounded-3xl">
        <div className="main-card-img shrink-0 ">
          <Image
            src={IMAGES.shopKo1Image}
            alt="속도저하없는 고속무제한 이미지"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="main-card-info pl-10 flex-1 flex flex-col justify-center">
          <div className="h-[25px]">
            <Image
              src={IMAGES.wifiImage}
              alt="wifi 텍스트 이미지"
              className="h-full w-auto"
            />
          </div>
          <p className="text-[26px] font-bold leading-loose">
            속도저하없는 고속무제한
          </p>
          <div className="py-4 leading-loose">
            <p className="text-[18px]">
              <span className="text-[#a5a5a5]">용량 | </span>무제한
            </p>
            <p className="text-[18px]">
              <span className="text-[#a5a5a5]">속도 | </span>4G/LTE 최대 20Mbps
            </p>
          </div>
          <div className="pb-10">
            <p>메신저, 인터넷 서핑을 포함해</p>
            <p>
              <span className="font-bold">
                고화질 영상 시청까지 원활한 속도
              </span>
              예요!
            </p>
          </div>
          <div>
            <Image
              src={IMAGES.qualityImage}
              alt="화질 이미지"
              className="w-[320px]"
            />
          </div>
        </div>
        <div className="main-card-price pl-5 flex-1 flex flex-col justify-end items-start">
          <p className="text-[#939393] line-through leading-loose">
            월 68,000원
          </p>
          <p className="text-2xl font-bold leading-loose">
            <span className="text-[#cb4cff]">21% </span>월 54,900원 ~
          </p>
          <p className="text-[#cb4cff] font-bold leading-loose">
            최대 18% 추가할인 혜택
          </p>
          <Button
            href="#"
            size="md"
            customClass="text-[#4a5052] border-[#bfbfbf] hover:bg-black"
          >
            자세히 보기
          </Button>
        </div>
      </div>
    </>
  );
}
