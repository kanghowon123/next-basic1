import { SUB_CARD_ITEMS } from "@/constants/product";
import Image from "next/image";
import Button from "@/components/common/Button/Button";

export default function HomeFiSubProductCard() {
  return (
    <div className="sub-card">
      <ul className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-2 md:pt-5 pt-2 md:px-0 px-[15px]">
        {SUB_CARD_ITEMS.map((subItem) => (
          <li
            key={subItem.id}
            className="h-[250px] md:flex block bg-white md:rounded-3xl rounded-0 py-2.5 items-center"
          >
            <div className="md:w-[40%] w-auto md:py-0 py-5">
              <Image
                src={subItem.itemImage}
                alt={subItem.title}
                className={`block mx-auto ${subItem.width} md:h-full h-20`}
              />
            </div>
            <div className="md:w-[60%] w-auto md:mx-0 mx-2.5">
              <div>
                <Image
                  src={subItem.wifi}
                  alt="와이파이 이미지"
                  className="w-auto h-[25px] md:block hidden"
                />
              </div>
              <p className=" bg-[#cb76f1] text-white font-bold md:hidden inline-block px-1">
                WiFi
              </p>
              <p className="font-bold md:text-[20px] text-[16px] mt-2 mb-2.5">
                {subItem.title}
              </p>
              <p className="md:text-[18px] text-[14px] md:font-bold font-light mb-5">
                <span className="text-[#cb4cff] font-bold">
                  {subItem.percent}%{" "}
                </span>
                {subItem.price}
              </p>
              <Button
                href="#"
                size="sm"
                customClass="md:inline hidden text-[#4a5052] border-[#bfbfbf] hover:bg-black"
              >
                자세히 보기
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
