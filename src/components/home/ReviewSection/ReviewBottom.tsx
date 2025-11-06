import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/constants/images";
import { REVIEW_QUESTION_ITEMS } from "@/constants/product";
import Button from "@/components/common/Button/Button";

export default function ReviewBottom() {
  return (
    <>
      <div className="text-center pt-[150px] pb-15">
        <p className="md:text-[20px] text-[14px] text-[#404040]">
          친절한 앨리스가 토끼굴에서 기다리고 있어요
        </p>
        <p className="font-bold md:text-[36px] text-[20px] text-[#404040]">
          도움이 필요하신가요?
        </p>
      </div>
      <div className="md:grid hidden grid-cols-3 pb-[100px]">
        <div>
          <div className="pb-2">
            <Image
              src={IMAGES.v1}
              alt="v1이미지"
              className="w-[25px] h-[25px]"
            />
          </div>
          <p className="text-[24px] pb-10">자주 묻는 질문을 확인해보세요</p>
          <div className="pb-5 pl-2">
            <p>궁금한 내용을 클릭해보세요!</p>
            <Link href="#" className="text-[#9b9c9b]">
              바로가기
            </Link>
          </div>
          <div className="flex">
            <ul className="flex justify-between">
              {REVIEW_QUESTION_ITEMS.map((item) => (
                <li key={item.id} className="p-2 flex flex-col items-center">
                  <div>
                    <Image
                      src={IMAGES.v1a}
                      alt={item.text}
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="pb-2">
            <Image
              src={IMAGES.v2}
              alt="v1이미지"
              className="w-[25px] h-[25px]"
            />
          </div>
          <p className="text-[24px] pb-10">카카오톡 채팅으로 문의해주세요</p>
          <div className="flex pb-5 pl-2">
            <div>
              <ul className="flex flex-col gap-0.5">
                <li>PC</li>
                <li>ID를 검색하세요</li>
                <li className="text-[#9b9c9b]">국내 @alicewifi</li>
                <li className="text-[#9b9c9b]">해외 @aliceworld</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-0.5">
                <li>Mobile</li>
                <li>채널을 검색하세요</li>
                <li className="text-[#9b9c9b]">앨리스 모바일</li>
              </ul>
            </div>
          </div>
          <Button
            href="#"
            size="sm"
            customClass="text-[#4a5052] border-[#bfbfbf] hover:bg-black"
          >
            문의방법
          </Button>
        </div>
        <div>
          <div className="pb-2">
            <Image
              src={IMAGES.v3}
              alt="v1이미지"
              className="w-[25px] h-[25px]"
            />
          </div>
          <p className="text-[24px] pb-10">상담원을 연결해드릴게요</p>
          <div className="pl-2">
            <p>평일 09:00 ~ 18:00</p>
            <p className="text-[#9b9c9b]">
              점심 12:00 ~ 13:00 | 주말 공휴일 휴무
            </p>
          </div>
          <p className="text-[#404040] text-[36px] pt-15 pl-2">02 336 4190</p>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="grid grid-cols-2 px-[15px]">
          <div>
            <div>
              <Image
                src={IMAGES.mQuestion}
                alt="자주 묻는 질문 이미지"
                className="w-auto h-5"
              />
            </div>
            <p className="font-bold my-2.5">자주 묻는 질문</p>
            <Link href="#" className="text-[14px]">
              바로가기 &gt;
            </Link>
          </div>
          <div>
            <div>
              <Image
                src={IMAGES.mIquiry}
                alt="자주 묻는 질문 이미지"
                className="w-auto h-5"
              />
            </div>
            <p className="font-bold my-2.5">카카오톡 문의</p>
            <Link href="#" className="text-[14px]">
              바로가기 &gt;
            </Link>
          </div>
        </div>
        <div className="px-[15px] py-[30px] ">
          <div className="px-5 py-[30px] bg-[#eeeeee66] rounded-2xl">
            <p className="font-bold pb-5">상담원 연결</p>
            <p className="text-[14px] pb-1">평일 9:00 ~ 18:00</p>
            <p className="text-[14px] text-[#a6a6a6] pb-5">
              점심 13:00 ~ 14:00 주말 및 공휴일 휴무
            </p>
            <hr className="text-[#ddd]" />
            <p className="text-[20px] pt-5">02 336 4190</p>
          </div>
        </div>
      </div>
    </>
  );
}
