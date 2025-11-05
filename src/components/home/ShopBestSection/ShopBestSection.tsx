import Image from "next/image";

import { IMAGES } from "@/constants/images";
import DomesticWifiSection from "@/components/home/ShopBestSection/Domestic/DomesticWifiSection";
import InternationalWifiSection from "./International/InternationalWifiSection";

export default function ShopBestSection() {
  return (
    <section className="bg-[#e5e7eb] py-[50px]">
      <div className="shop-box max-w-(--site-width) mx-auto">
        <div className="flex flex-col items-center">
          <Image
            src={IMAGES.shopTitleImage}
            alt="shop best 이미지"
            style={{ width: "268px", height: "auto" }}
          ></Image>
          <p className="text-[36px] font-bold text-[#404040]">
            인기 데이터를 한눈에!
          </p>
        </div>

        {/* 국내 */}
        <DomesticWifiSection />
        {/* 해외 */}
        <InternationalWifiSection />
      </div>
    </section>
  );
}
