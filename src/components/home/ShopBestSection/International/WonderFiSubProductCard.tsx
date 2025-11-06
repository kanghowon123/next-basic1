import Button from "@/components/common/Button/Button";
import { WONDERFI_ITEMS } from "@/constants/product";
import Image from "next/image";

export default function WonderFiSubProductCard() {
  return (
    <>
      <div className="sub-cards md:w-1/3 w-full">
        <ul className="flex md:flex-col flex-row md:gap-5 gap-2 h-full">
          {WONDERFI_ITEMS.map((item) => (
            <li
              key={item.id}
              className="flex md:flex-row flex-col bg-white md:rounded-3xl rounded-0 w-full h-full items-center px-[15px]"
            >
              <div className="md:py-0 py-4">
                <Image
                  src={item.itemImage}
                  alt={item.title}
                  className="mx-[27px] my-[5px] w-[110px]"
                />
              </div>
              <div>
                <div>
                  <Image
                    src={item.wonderFi}
                    alt="WonderFI"
                    className="my-[5px] w-[74px]"
                  />
                </div>
                <p className="md:text-[20px] text-[16px] font-bold mb-2.5">
                  {item.title}
                </p>
                <p className="pb-[23px] md:block hidden">{item.date}</p>
                <p className="md:text-[18px] text-[16px] md:font-bold font-light text-[#5c5c5c] pb-4">
                  {item.price}
                </p>
                <Button
                  href="#"
                  size="sm"
                  customClass="md:inline-block hidden text-[14px] text-[#404040] border-[#bfbfbf] hover:bg-black"
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
