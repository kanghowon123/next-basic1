import Button from "@/components/common/Button/Button";
import { WONDERFI_ITEMS } from "@/constants/product";
import Image from "next/image";

export default function WonderFiSubProductCard() {
  return (
    <>
      <div className="sub-cards w-1/3">
        <ul className="flex flex-col gap-5 h-full">
          {WONDERFI_ITEMS.map((item) => (
            <li
              key={item.id}
              className="flex bg-white rounded-3xl h-full items-center"
            >
              <Image
                src={item.itemImage}
                alt={item.title}
                className="mx-[27px] my-[5px]"
                style={{
                  width: "110px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
              <div>
                <Image
                  src={item.wonderFi}
                  alt="WonderFI"
                  className="my-[5px]"
                  style={{ width: "74px", height: "auto" }}
                />
                <p className="text-[20px] font-bold mb-2.5">{item.title}</p>
                <p className="pb-[23px]">{item.date}</p>
                <p className="text-[18px] font-bold text-[#5c5c5c] pb-4">
                  {item.price}
                </p>
                <Button
                  href="#"
                  size="sm"
                  customClass="text-[14px] text-[#404040] border-[#bfbfbf] hover:bg-black"
                >
                  자세히 보기
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
