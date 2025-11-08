"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { WIFI_LIST } from "@/constants/wifi";
import Button from "@/components/common/Button/Button";

export default function WifiProductPage() {
  const { productId } = useParams();
  const product = WIFI_LIST.find((item) => item.id === Number(productId));

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;
  return (
    <div className="flex gap-[150px] pt-[100px] max-w-(--site-width) mx-auto">
      <div>
        <Image
          src={product.mainImage}
          alt="이미지"
          className="max-w-[577px] max-h-[577px]"
        />
      </div>
      <div className="grow">
        <div className="flex items-center">
          <p className="text-[22px] font-bold pr-2">{product.title}</p>
          <div className="flex items-center gap-2">
            <div>
              <Image
                src={product.saleImage}
                alt="세일 이미지"
                className="w-auto h-[21.5px]"
              />
            </div>
            <div>
              {product.mdImage ? (
                <Image
                  src={product.mdImage}
                  alt="md 이미지"
                  className="w-auto h-[21.5px]"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-10">
          <div className="flex gap-2 items-center">
            <p className="text-[20px] text-[#cb4fcf] font-bold">
              {product.price}
            </p>
            <p className="text-[14px] text-[#40404080] line-through">
              {product.salePrice}
            </p>
          </div>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </Link>
        </div>
        <hr className="pb-7 text-gray-300" />
        <div className="text-[20px]">
          <p>{product.name}</p>
          <p className="text-[#666666]">{product.info}</p>
          <p className="text-[#666666]">{product.rental}</p>
        </div>
        <div>
          <div className="pt-5 pb-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold">배송비</p>
              <p className="font-light">3,000원</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-bold">배송 안내</p>
              <p className="font-light">
                연장 주문시 꼭 '방문 수령' 선택해주세요!
              </p>
            </div>
          </div>
          <div className="pb-5">
            <select
              name="deliveryMethod-1"
              id="selectDelivery-1"
              defaultValue="택배"
              className="border border-gray-300 p-2 font-light"
            >
              <option value="택배">택배</option>
              <option value="방문수령">방문수령</option>
            </select>
          </div>
          <div className="flex flex-col pb-6">
            <label className="text-[14px] font-bold py-2">
              희망배송일(=사용시작일)*
            </label>
            <input
              type="text"
              placeholder="필수입력"
              className="border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label className="text-[14px] font-bold py-2">
              구매조건 선택 *
            </label>
            <select
              name="deliveryMethod-2"
              id="selectDelivery-2"
              defaultValue=""
              className="border border-gray-300 p-2 font-light"
            >
              <option value="" hidden>
                구매조건 선택(필수)
              </option>
              <option value="신규 기기 대여">신규 기기 대여</option>
              <option value="기존 기기 연장">
                기존 기기 연장(추가 할인 적용)
              </option>
            </select>
          </div>
          <div className="flex flex-col pb-6">
            <label className="text-[14px] font-bold py-2">요금제 선택 *</label>
            <select
              name="deliveryMethod-3"
              id="selectDelivery-3"
              defaultValue=""
              className="border border-gray-300 p-2 font-light"
            >
              <option value="" hidden>
                요금제 선택(필수)
              </option>
              <option value="1개월">1개월</option>
              <option value="2개월">2개월</option>
              <option value="3개월">3개월</option>
              <option value="4개월">4개월</option>
              <option value="5개월">5개월</option>
              <option value="6개월">6개월</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            <Button
              href="#"
              size="md"
              customClass="text-[14px] bg-[#cb4cff] text-white font-light text-center"
            >
              구매하기
            </Button>
            <Button
              href="#"
              size="md"
              customClass="text-[14px] font-light text-center border-gray-300"
            >
              장바구니
            </Button>
            <Button
              href="#"
              size="md"
              customClass="font-light flex gap-1 items-center justify-center border-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[15px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p className="text-[14px]">{product.heart}</p>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              href="#"
              size="md"
              customClass="flex flex-1 gap-1 items-center justify-center bg-[#00de5a] border-[#00de5a]"
            >
              <span className="w-6 h-6 bg-black rounded-full relative">
                <span className="absolute top-1 left-[6.3px] text-[#00de5a] text-sm font-bold">
                  N
                </span>
              </span>
              pay 구매하기
            </Button>
            <Button
              href="#"
              size="md"
              customClass="text-[#00de5a] border-gray-300"
            >
              찜
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
