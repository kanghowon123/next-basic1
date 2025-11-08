import { IMAGES } from "./images";
import {
  SelectItems,
  SubCardItems,
  WonderFiItem,
  FooterData,
} from "@/types/product.types";

export const SELECT_ITEMS: SelectItems[] = [
  {
    id: 1,
    image: IMAGES.select1Image,
    title: "HomeFi",
    subTitle: "국내 홈와이파이",
  },
  {
    id: 2,
    image: IMAGES.select2Image,
    title: "WiFi",
    subTitle: "국내 포켓와이파이",
  },
  {
    id: 3,
    image: IMAGES.select3Image,
    title: "HomeFi",
    subTitle: "해외 포켓와이파이",
  },
];

export const SUB_CARD_ITEMS: SubCardItems[] = [
  {
    id: 1,
    itemImage: IMAGES.shopKo2Image,
    wifi: IMAGES.wifiImage,
    title: "하루 2GB+고속무제한",
    percent: 18,
    price: "월 38,900원 ~",
    width: "w-[98px]",
  },
  {
    id: 2,
    itemImage: IMAGES.shopKo3Image,
    wifi: IMAGES.wifiImage,
    title: "월 40GB 고속",
    percent: 12,
    price: "월 27,900원 ~",
    width: "w-[65px]",
  },
  {
    id: 3,
    itemImage: IMAGES.shopKo4Image,
    wifi: IMAGES.wifiImage,
    title: "속도저하없는 고속무제한",
    percent: 8,
    price: "월 55,900원 ~",
    width: "w-[100px]",
  },
  // {
  //   id: 4,
  //   itemImage: IMAGES.shopKoM1Image,
  //   wifi: IMAGES.wifiImage,
  //   title: "일 3GB + 고속무제한",
  //   percent: 8,
  //   price: "월 39,900원 ~",
  //   width: "w-[100px]",
  // },
];

export const WONDERFI_ITEMS: WonderFiItem[] = [
  {
    id: 1,
    itemImage: IMAGES.shopInit2Image,
    wonderFi: IMAGES.wonderFiImage,
    title: "일본 원더파이",
    date: "일 3GB / 무제한",
    price: "일 3,300원 ~",
  },
  {
    id: 2,
    itemImage: IMAGES.shopInit3Image,
    wonderFi: IMAGES.wonderFiImage,
    title: "베트남 원더파이",
    date: "완전 무제한",
    price: "일 3,900원",
  },
];

export const FOOTER_DATA: FooterData = {
  company: {
    name: "앨리스모바일 Alice Mobile",
    image: IMAGES.pingImage,
    address: "서울특별시 마포구 와우산로 5길 17-12층(서교동), 04074",
    mapLink: "네이버지도",
  },
  sections: [
    {
      id: "shop",
      title: "어떤 데이터를 찾나요?",
      titleEn: "Shop",
      order: "order-1 md:order-1",
      links: [
        { text: "국내 포켓와이파이", url: "#" },
        { text: "국내 유심/이심", url: "#" },
        { text: "해외 포켓와이파이", url: "#" },
      ],
    },
    {
      id: "customer-service",
      title: "도움이 필요하신가요?",
      titleEn: "Customer Service",
      order: "order-3 md:order-2",
      info: [
        {
          label: "운영시간 09:00 - 18:00",
          sub: "점심시간 12:30 - 13:30",
          holiday: "주말 및 공휴일 휴무",
        },
      ],
    },
    {
      id: "methods",
      title: "",
      titleEn: "",
      order: "order-4 md:order-3",
      methods: [
        {
          messenger: {
            email: "이메일",
            kakao: "카카오톡",
            phone: "전화번호",
          },

          contact: {
            email: "hello@alicemobile.co.kr",
            kakaoKo: "국내제품 @alicewifi",
            kakaoInt: "해외제품 @alicewifi",
            phone: "02 336 4190",
          },
        },
      ],
    },
    {
      id: "information",
      title: "궁금한 내용이 있으신가요?",
      titleEn: "Information",
      order: "order-2 md:order-4",
      links: [
        { text: "자주 묻는 질문", url: "#" },
        { text: "찾아오는 길", url: "#" },
        { text: "브랜드스토리", url: "#" },
      ],
    },
  ],
};
