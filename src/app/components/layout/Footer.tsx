import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/constants/images";
import { FOOTER_DATA } from "@/constants/product";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#faf6ff]">
        <div className="max-w-(--site-width) mx-auto py-10">
          <div>
            <p className="text-[20px] my-2.5">{FOOTER_DATA.company.name}</p>
            <div className="flex items-center">
              <div className="pr-2">
                <Image
                  src={FOOTER_DATA.company.image}
                  alt="ping"
                  className="w-[13px]"
                />
              </div>
              <p className="text-[#404040]">
                {FOOTER_DATA.company.address}
                <Link
                  href="#"
                  className="underline text-[14px] text-[#8a8a8a] pl-2"
                >
                  {FOOTER_DATA.company.mapLink}
                </Link>
              </p>
            </div>
          </div>
          <div>
            <ul className="flex pt-10 justify-between">
              {FOOTER_DATA.sections.map((list) => (
                <li key={list.id}>
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] text-[#beb2c2]">
                      {list.titleEn || "\u00a0"}
                    </p>
                    <p>{list.title || "\u00a0"}</p>
                  </div>
                  {list.links && (
                    <div className="py-5 flex flex-col gap-1.5">
                      {list.links?.map((link) => (
                        <p
                          key={link.text}
                          className="text-[14px] text-[#404040]"
                        >
                          <Link href={link.url}>{link.text}</Link>
                        </p>
                      ))}
                    </div>
                  )}
                  {list.info && (
                    <div className="py-5 text-[14px] text-[#404040]">
                      {list.info.map((i) => (
                        <div key={i.label} className="flex flex-col gap-1.5">
                          <p>{i.label}</p>
                          <p>{i.sub}</p>
                          <p className="text-[#8c8c8c]">{i.holiday}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {list.methods && (
                    <div className="py-5">
                      {list.methods?.map((method) => (
                        <div
                          key={method.messenger?.email}
                          className="flex gap-5"
                        >
                          <div className="flex flex-col gap-1.5 text-[14px] text-[#404040]">
                            <p>{method.messenger?.email}</p>
                            <p className="pb-[27px]">
                              {method.messenger?.kakao}
                            </p>
                            <p>{method.messenger?.phone}</p>
                          </div>
                          <div className="flex flex-col gap-1.5 text-[14px] text-[#404040]">
                            <Link href="#">{method.contact?.email}</Link>
                            <p>{method.contact?.kakaoKo}</p>
                            <p>{method.contact?.kakaoInt}</p>
                            <p className="text-black text-[24px]">
                              {method.contact?.phone}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-(--site-width) mx-auto py-[30px]">
        <div className="flex flex-col gap-2 pb-5]">
          <p className="text-[8px] text-[#5a5a5a]">
            (주)해리 | 대표이사 : 여혁종 | 개인정보책임관리자 : 임규원 |
            사업자등록번호 : 623-86-00369 | 사업장소재지 : 서울특별시 마포구
            와우산로 5길 17-1, 2층 | 통신판매업 신고번호 : 2020-서울마포3750
          </p>
          <p className="text-[8px] text-[#5a5a5a]">
            Phone : 02-336-4190 | E-mail :
            <Link href="#">hello@alicemobile.co.kr</Link>
          </p>
          <div>
            <Image
              src={IMAGES.inipayImage}
              alt="inipay"
              className="w-[45px] h-[45px]"
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-[12px]">
            이용약관{" "}
            <Link href="#" className="font-bold">
              {" "}
              개인정보처리방침
            </Link>
          </p>
          <p className="text-[12px]">
            Copyright ⓒ 2025 앨리스 모바일 | No.1 국내 무선와이파이 대여 -
            무약정 LTE 데이터 All rights reserved.
          </p>
        </div>
      </div>
      <Link href="#" className="fixed bottom-[30px] right-[30px] z-50">
        <Image
          src={IMAGES.kakaoImage}
          alt="카카오톡 문의"
          className="w-[84px] h-12 rounded-[64px] shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12),0px_18px_88px_-4px_rgba(24,39,75,0.14)] hover:brightness-95
               transition duration-100"
        />
      </Link>
    </footer>
  );
}
