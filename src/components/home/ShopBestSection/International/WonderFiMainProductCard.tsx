import Button from "@/components/common/Button/Button";
import { IMAGES } from "@/constants/images";
import Image from "next/image";

export default function WonderFiMainProductCard() {
  return (
    <>
      <div className="main-card md:h-[580px] h-auto md:w-2/3 w-auto flex md:flex-row flex-col bg-white md:rounded-3xl rounded-0 items-center">
        <div className="md:hidden block w-full  text-center bg-[#00dfa9] text-white py-2.5">
          <p className="font-bold text-[20px]">WonderFi</p>
          <p className="font-bold">인기 해외사용 제품</p>
        </div>
        <div className="flex justify-center px-[55px] py-[30px]">
          <Image
            src={IMAGES.shopInit1Image}
            alt="141개국 속도저하없는 무제한"
            className="mx-[50px] md:w-[364px] w-full block"
          />
        </div>
        <div className="text-center pb-[30px]">
          <div className="md:block hidden">
            <Image
              src={IMAGES.wonderFiImage}
              alt="wonderFi"
              className="h-[25px] w-auto"
            />
          </div>
          <p className="bg-[#00dfa9] text-white px-1 font-bold md:hidden inline-block items-center">
            WonderFi BEST
          </p>
          <div className="flex md:flex-col flex-row py-2">
            <p className="md:text-[26px] text-[18px] font-bold md:mt-2.5 mt-0">
              141개국
            </p>
            <p className="text-[18px] md:hidden inline-block px-1">|</p>
            <p className="md:text-[26px] text-[18px] font-bold md:mb-2.5 mb-0">
              속도저하없는 무제한
            </p>
          </div>
          <div className="text-[18px] leading-loose md:block hidden">
            <p>
              <span className="text-[#a5a5a5] ">용량 | </span>무제한
            </p>
            <p>
              <span className="text-[#a5a5a5]">속도 | </span>4G/LTE
            </p>
          </div>
          <p className="md:text-[26px] text-[18px] md:font-bold font-light leading-loose">
            일 3,900원 ~
          </p>
          <p className="text-[#00e3af] font-bold leading-loose pb-4 md:block hidden">
            최대 3일 요금 절약!
          </p>
          <Button
            href="#"
            size="md"
            customClass="text-[#4a5052] border-[#bfbfbf] hover:bg-black md:inline-block hidden"
          >
            자세히 보기
          </Button>
        </div>
      </div>
    </>
  );
}
