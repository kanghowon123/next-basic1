import Image from "next/image";

import { WIFI_LIST } from "@/constants/wifi";
import Link from "next/link";

export default function ItemListSection() {
  return (
    <div className="w-full mx-auto flex flex-wrap justify-between pb-30">
      {WIFI_LIST.map((list) => (
        <div key={list.id} className="pt-10 ">
          <Link href={`/wifi/${list.id}`}>
            <div>
              <Image
                src={list.mainImage}
                alt={list.title}
                className="max-w-[303px] transition duration-500 hover:opacity-50"
              />
            </div>
            <p className="font-bold leading-loose pt-4">{list.title}</p>
            <div className="flex items-end gap-2 leading-loose">
              <p className="font-bold">{list.price}</p>
              <p className="text-[11px] text-[#40404080] line-through">
                {list.salePrice}
              </p>
            </div>
            <div className="flex gap-1 py-2">
              <div>
                <Image
                  src={list.saleImage}
                  alt="세일 이미지"
                  className="w-auto h-[21px]"
                />
              </div>
              <div>
                {list.mdImage ? (
                  <Image
                    src={list.mdImage}
                    alt="md,best 이미지"
                    className="w-auto h-[21px]"
                  />
                ) : null}
              </div>
            </div>
            <div className="text-[14px] py-2">
              <p>{list.name}</p>
              <p className="text-[#666666]">{list.info}</p>
              <p className="text-[#666666]">{list.rental}</p>
            </div>
          </Link>
          <div className="text-[#757575] flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-[15px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <p className="text-[13px] pr-2">{list.heart}</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-[15px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
