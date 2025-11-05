import { IMAGES } from "@/constants/images";
import { SELECT_ITEMS } from "@/constants/product";
import Image from "next/image";

import SelectProductLinkitem from "@/components/common/LinkItem/SelectProductLinkitem";

export default function MainTopSection() {
  return (
    <section
      style={{ backgroundImage: `url(${IMAGES.backgroundImage.src})` }}
      className="md:h-[90vh] h-full bg-cover bg-no-repeat bg-center pt-20"
    >
      <div className="max-w-(--site-width) mx-auto h-full flex flex-col justify-center md:py-0 py-10">
        <div className="select-text-box text-center">
          <h1 className="md:text-[86px] text-[36px] font-bold text-white">
            Select Your Data
          </h1>
          <h3 className="md:text-[36px] text-[22px] font-bold text-white">
            어떤 데이터를 찾나요?
          </h3>
          <Image
            src={IMAGES.selectMImage}
            alt="모바일 select 이미지"
            className="md:hidden block"
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </div>
        <div className="select-items-box md:block hidden">
          <ul className="flex">
            {SELECT_ITEMS.map((item) => (
              <SelectProductLinkitem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
