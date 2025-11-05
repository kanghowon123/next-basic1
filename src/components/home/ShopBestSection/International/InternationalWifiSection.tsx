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
          className="my-5"
          style={{ width: "auto", height: "36px" }}
        />
      </div>
      <div className="card flex gap-5">
        <WonderFiMainProductCard />
        <WonderFiSubProductCard />
      </div>
    </div>
  );
}
