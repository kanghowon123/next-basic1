import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import Header from "./components/layout/Header";

import backgroundImage from "../assets/images/back1.png";
import select1Image from "../assets/images/select1.png";
import select2Image from "../assets/images/select2.png";
import select3Image from "../assets/images/select3.png";
import selectMImage from "../assets/images/select-m.png";
import shopTitleImage from "../assets/images/shop-title.png";
import shopSubTitleImage from "../assets/images/shop-sub-title.png";
import wifiImage from "../assets/images/wifi.png";
import qualityImage from "../assets/images/shop-ko-quality.png";
import shopKo1Image from "../assets/images/shop-ko1.png";
import shopKo2Image from "../assets/images/shop-ko2.png";
import shopKo3Image from "../assets/images/shop-ko3.png";
import shopKo4Image from "../assets/images/shop-ko4.png";
import shopKoM1Image from "../assets/images/shop-ko-m1.png";
import shopSubTitle2Image from "../assets/images/shop-sub-title2.png";
import wonderFiImage from "../assets/images/wonderFi.png";
import shopInit1Image from "../assets/images/shop-int1.png";
import shopInit2Image from "../assets/images/shop-int2.png";
import shopInit3Image from "../assets/images/shop-int3.png";

type SelectItems = {
  id: number;
  image: any;
  title: string;
  subTitle: string;
};

const selectItems: SelectItems[] = [
  {
    id: 1,
    image: select1Image,
    title: "HomeFi",
    subTitle: "국내 홈와이파이",
  },
  {
    id: 2,
    image: select2Image,
    title: "WiFi",
    subTitle: "국내 포켓와이파이",
  },
  {
    id: 3,
    image: select3Image,
    title: "HomeFi",
    subTitle: "해외 포켓와이파이",
  },
];

const spoqaHanSans = localFont({
  src: [
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

type SubCardItems = {
  id: number;
  itemImage: any;
  wifi: any;
  title: string;
  percent: number;
  price: string;
  width: string;
};

const subCardItems: SubCardItems[] = [
  {
    id: 1,
    itemImage: shopKo2Image,
    wifi: wifiImage,
    title: "하루 2GB+고속무제한",
    percent: 18,
    price: "월 38,900원 ~",
    width: "98px",
  },
  {
    id: 2,
    itemImage: shopKo3Image,
    wifi: wifiImage,
    title: "월 40GB 고속",
    percent: 12,
    price: "월 27,900원 ~",
    width: "65px",
  },
  {
    id: 3,
    itemImage: shopKo4Image,
    wifi: wifiImage,
    title: "속도저하없는 고속무제한",
    percent: 8,
    price: "월 55,900원 ~",
    width: "100px",
  },
];

type WonderFiItem = {
  id: number;
  itemImage: any;
  wonderFi: any;
  title: string;
  date: string;
  price: string;
};

const wonderFiItem: WonderFiItem[] = [
  {
    id: 1,
    itemImage: shopInit2Image,
    wonderFi: wonderFiImage,
    title: "일본 원더파이",
    date: "일 3GB / 무제한",
    price: "일 3,300원 ~",
  },
  {
    id: 2,
    itemImage: shopInit3Image,
    wonderFi: wonderFiImage,
    title: "베트남 원더파이",
    date: "완전 무제한",
    price: "일 3,900원",
  },
];
export default function App() {
  return (
    <>
      <Header />
      <main>
        <section
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
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
                src={selectMImage}
                alt="모바일 select 이미지"
                className="md:hidden block"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
            <div className="select-items-box md:block hidden">
              <ul className="flex">
                {selectItems.map((item) => (
                  <li key={item.id} className="text-white text-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <p className="text-[36px] font-bold">{item.title}</p>
                    <p className="text-[24px] pb-5">{item.subTitle}</p>
                    <Link
                      className={`${spoqaHanSans.className} border py-1.5 px-5 rounded-3xl`}
                      href="#"
                    >
                      &gt;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-[#e5e7eb] py-[50px]">
          <div className="shop-box max-w-(--site-width) mx-auto">
            <div className="flex flex-col items-center">
              <Image
                src={shopTitleImage}
                alt="shop best 이미지"
                style={{ width: "268px", height: "auto" }}
              ></Image>
              <p className="text-[36px] font-bold text-[#404040]">
                인기 데이터를 한눈에!
              </p>
            </div>
            <div className="wifi-box ">
              {/* 국내 */}
              <div className="wifi-ko">
                <Image
                  src={shopSubTitleImage}
                  alt="wifi|HomeFi 국내 이미지"
                  className="my-5"
                  style={{ width: "auto", height: "36px" }}
                />
                <div className="main-card bg-white flex py-10 px-5 h-[470px] rounded-3xl">
                  <Image
                    src={shopKo1Image}
                    alt="속도저하없는 고속무제한 이미지"
                    className="w-1/3"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="main-card-info w-1/3 pl-10 flex flex-col justify-center items-start">
                    <Image
                      src={wifiImage}
                      alt="wifi 텍스트 이미지"
                      className=""
                      style={{ width: "auto", height: "25px" }}
                    />
                    <p className="text-[26px] font-bold leading-loose">
                      속도저하없는 고속무제한
                    </p>
                    <div className="py-4 leading-loose">
                      <p className="text-[18px]">
                        <span className="text-[#a5a5a5]">용량 | </span>무제한
                      </p>
                      <p className="text-[18px]">
                        <span className="text-[#a5a5a5]">속도 | </span>4G/LTE
                        최대 20Mbps
                      </p>
                    </div>
                    <div className="pb-10">
                      <p>메신저, 인터넷 서핑을 포함해</p>
                      <p>
                        <span className="font-bold">
                          고화질 영상 시청까지 원활한 속도
                        </span>
                        예요!
                      </p>
                    </div>
                    <Image
                      src={qualityImage}
                      alt="화질 이미지"
                      style={{ width: "320px", height: "auto" }}
                    />
                  </div>
                  <div className="main-card-price w-1/3 pl-5 felx flex-col mt-auto">
                    <p className="text-[#939393] line-through leading-loose">
                      월 68,000원
                    </p>
                    <p className="text-2xl font-bold leading-loose">
                      <span className="text-[#cb4cff]">21% </span>월 54,900원 ~
                    </p>
                    <p className="text-[#cb4cff] font-bold leading-loose">
                      최대 18% 추가할인 혜택
                    </p>
                    <Link
                      href="#"
                      className="inline-block text-[18px] text-[#4a5052] border-[#4a5052] py-[15px] px-[30px] border rounded-4xl mt-7 hover:text-white hover:bg-black duration-300"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>
                <div className="sub-card">
                  <ul className="flex w-full gap-5 pt-5">
                    {subCardItems.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="w-1/3 h-[250px] flex bg-white rounded-3xl py-2.5 items-center"
                      >
                        <div className="w-[40%]">
                          <Image
                            src={subItem.itemImage}
                            alt={subItem.title}
                            className="block mx-auto"
                            style={{
                              width: `${subItem.width}`,
                              height: "auto",
                            }}
                          />
                        </div>
                        <div className="w-[60%]">
                          <Image
                            src={subItem.wifi}
                            alt="와이파이 이미지"
                            style={{ width: "auto", height: "25px" }}
                          />
                          <p className="font-bold text-[20px] mt-2 mb-2.5">
                            {subItem.title}
                          </p>
                          <p className="text-[18px] font-bold mb-5">
                            <span className="text-[#cb4cff]">
                              {subItem.percent}%
                            </span>
                            {subItem.price}
                          </p>
                          <Link
                            href="#"
                            className="text-[14px] text-[#4a5052] border-[#4a5052] border py-2.5 px-[25px] rounded-3xl hover:text-white hover:bg-black duration-300"
                          >
                            자세히 보기
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 해외 */}
              <div className="wifi-int pt-[70px]">
                <Image
                  src={shopSubTitle2Image}
                  alt="wonderFi 해외 이미지"
                  className="my-5"
                  style={{ width: "auto", height: "36px" }}
                />
                <div className="card flex gap-5">
                  <div className="main-card h-[580px] w-2/3 flex bg-white rounded-3xl items-center">
                    <Image
                      src={shopInit1Image}
                      alt="141개국 속도저하없는 무제한"
                      className="mx-[50px]"
                      style={{ width: "364px", height: "auto" }}
                    />
                    <div className="">
                      <Image
                        src={wonderFiImage}
                        alt="wonderFi"
                        style={{ width: "auto", height: "25px" }}
                      />
                      <p className="text-[26px] font-bold mt-2.5">141개국</p>
                      <p className="text-[26px] font-bold mb-2.5">
                        속도저하없는 무제한
                      </p>
                      <div className="text-[18px] leading-loose">
                        <p>
                          <span className="text-[#a5a5a5] ">용량 | </span>무제한
                        </p>
                        <p>
                          <span className="text-[#a5a5a5]">속도 | </span>4G/LTE
                        </p>
                      </div>
                      <p className="text-[26px] font-bold leading-loose">
                        일 3,900원 ~
                      </p>
                      <p className="text-[#00e3af] font-bold leading-loose pb-4">
                        최대 3일 요금 절약!
                      </p>
                      <Link
                        href="#"
                        className="text-[14px] text-[#4a5052] border-[#4a5052] border py-[15px] px-[30px] rounded-3xl hover:text-white hover:bg-black duration-300"
                      >
                        자세히 보기
                      </Link>
                    </div>
                  </div>
                  <div className="sub-cards w-1/3">
                    <ul className="flex flex-col gap-5 h-full">
                      {wonderFiItem.map((item) => (
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
                            <p className="text-[20px] font-bold mb-[10px]">
                              {item.title}
                            </p>
                            <p className="pb-[23px]">{item.date}</p>
                            <p className="text-[18px] font-bold text-[#5c5c5c] pb-4">
                              {item.price}
                            </p>
                            <Link
                              href="#"
                              className="text-[14px] text-[#4a5052] border-[#4a5052] border py-2.5 px-[25px] rounded-3xl hover:text-white hover:bg-black duration-300"
                            >
                              자세히 보기
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
