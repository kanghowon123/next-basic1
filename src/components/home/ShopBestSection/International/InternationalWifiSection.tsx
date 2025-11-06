import Image from "next/image";
import { IMAGES } from "@/constants/images";
import WonderFiMainProductCard from "./WonderFiMainProductCard";
import WonderFiSubProductCard from "./WonderFiSubProductCard";

export default function InternationalWifiSection() {
  return (
    <div className="wifi-int pt-[70px]">
      <div>
        <Image
          src={IMAGES.shopSubTitle2Image}
          alt="wonderFi 해외 이미지"
          className="my-5 h-9 w-auto md:block hidden"
        />
      </div>
      <div className="card flex md:flex-row flex-col md:gap-5 gap-2 md:px-0 px-[15px]">
        <WonderFiMainProductCard />
        <WonderFiSubProductCard />
      </div>
    </div>
  );
}
