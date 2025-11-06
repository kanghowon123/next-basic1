import Image from "next/image";

import { IMAGES } from "@/constants/images";
import DomesticWifiSection from "@/components/home/ShopBestSection/Domestic/DomesticWifiSection";
import InternationalWifiSection from "./International/InternationalWifiSection";

export default function ShopBestSection() {
  return (
    <section className="bg-[#e5e7eb] py-[50px]">
      <div className="shop-box max-w-(--site-width) mx-auto">
        <div className="flex flex-col items-center">
          <div>
            <Image
              src={IMAGES.shopTitleImage}
              alt="shop best 이미지"
              className="w-[268px] md:block hidden"
            ></Image>
          </div>
          <div>
            <Image
              src={IMAGES.shopMTitleImage}
              alt="모바일 이미지"
              className="w-5 md:hidden block my-2"
            />
          </div>
          <p className="md:text-[36px] text-[20px] font-bold text-[#404040]">
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
