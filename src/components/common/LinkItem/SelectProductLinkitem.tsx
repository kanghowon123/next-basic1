import localFont from "next/font/local";

import { SelectItems } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";

const spoqaHanSans = localFont({
  src: [
    {
      path: "../../../assets/fonts/SpoqaHanSansNeo-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

type SelectItemsProps = {
  item: SelectItems;
};

export default function SelectProductLinkitem({ item }: SelectItemsProps) {
  return (
    <li key={item.id} className="text-white text-center">
      <Image
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "auto" }}
      />
      <p className="text-[36px] font-bold">{item.title}</p>
      <p className="text-[24px] pb-5">{item.subTitle}</p>
      <Link
        className={`${spoqaHanSans.className} border py-1.5 px-5 rounded-3xl hover:bg-white hover:text-[#b100de]`}
        href="#"
      >
        &gt;
      </Link>
    </li>
  );
}
