import { SUB_CARD_ITEMS } from "@/constants/product";
import Image from "next/image";
import Button from "@/components/common/Button/Button";

export default function HomeFiSubProductCard() {
  return (
    <div className="sub-card">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-5">
        {SUB_CARD_ITEMS.map((subItem) => (
          <li
            key={subItem.id}
            className="h-[250px] flex bg-white rounded-3xl py-2.5 items-center"
          >
            <div className="w-[40%]">
              <Image
                src={subItem.itemImage}
                alt={subItem.title}
                className={`block mx-auto ${subItem.width} h-full`}
              />
            </div>
            <div className="w-[60%]">
              <div>
                <Image
                  src={subItem.wifi}
                  alt="와이파이 이미지"
                  className="w-auto h-[25px]"
                />
              </div>
              <p className="font-bold text-[20px] mt-2 mb-2.5">
                {subItem.title}
              </p>
              <p className="text-[18px] font-bold mb-5">
                <span className="text-[#cb4cff]">{subItem.percent}%</span>
                {subItem.price}
              </p>
              <Button
                href="#"
                size="sm"
                customClass="text-[#4a5052] border-[#bfbfbf] hover:bg-black"
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
