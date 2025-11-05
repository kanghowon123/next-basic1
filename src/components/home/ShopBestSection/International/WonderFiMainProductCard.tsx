import Button from "@/components/common/Button/Button";
import { IMAGES } from "@/constants/images";
import Image from "next/image";

export default function WonderFiMainProductCard() {
  return (
    <>
      <div className="main-card h-[580px] w-2/3 flex bg-white rounded-3xl items-center">
        <Image
          src={IMAGES.shopInit1Image}
          alt="141개국 속도저하없는 무제한"
          className="mx-[50px]"
          style={{ width: "364px", height: "auto" }}
        />
        <div className="">
          <Image
            src={IMAGES.wonderFiImage}
            alt="wonderFi"
            style={{ width: "auto", height: "25px" }}
          />
          <p className="text-[26px] font-bold mt-2.5">141개국</p>
          <p className="text-[26px] font-bold mb-2.5">속도저하없는 무제한</p>
          <div className="text-[18px] leading-loose">
            <p>
              <span className="text-[#a5a5a5] ">용량 | </span>무제한
            </p>
            <p>
              <span className="text-[#a5a5a5]">속도 | </span>4G/LTE
            </p>
          </div>
          <p className="text-[26px] font-bold leading-loose">일 3,900원 ~</p>
          <p className="text-[#00e3af] font-bold leading-loose pb-4">
            최대 3일 요금 절약!
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
