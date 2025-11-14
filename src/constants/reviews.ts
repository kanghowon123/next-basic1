import { IMAGES } from "@/constants/images";
import { ReviewItem, ReviewQuestionItem } from "@/types/review.types";

export const REVIEW_ITEMS: ReviewItem[] = [
  {
    id: 1,
    bgColor: "bg-[#cd4cff]",
    color: "text-white",
    title: "하트여왕",
    content:
      "삶의 질이 달라졌어요!\n인터넷 설치하긴 좀 그렇고\n와이파이 쓰러면 도서관까지 가야해서\n불편했는데 집에서 되니까 완전 좋아요!",
  },
  {
    id: 2,
    bgColor: "bg-[#434343]",
    color: "text-white",
    title: "모자장수",
    content:
      "삶의 질이 달라졌어요!\n인터넷 설치하긴 좀 그렇고\n와이파이 쓰러면 도서관까지 가야해서\n불편했는데 집에서 되니까 완전 좋아요!",
  },
  {
    id: 3,
    bgColor: "bg-[#efefef]",
    color: "text-[#404040]",
    title: "험프티",
    content:
      "전화 문의 등 서비스 응대도 좋았고\n제품 여러 대 세 달 동안 사용했는데\n만족도 높습니다.",
  },
  {
    id: 4,
    bgColor: "bg-[#efefef]",
    color: "text-black",
    title: "일본 원더파이",
    content:
      "속도도 전혀 느림없이 잘상용했고,\n포켓와이파이 타 브랜드에 비해\n너무 가벼워서 여행하며 편했어요!",
  },
  {
    id: 5,
    bgColor: "bg-[#00e3af]",
    title: "미국 원더파이",
    color: "text-black",
    content: "너무 잘썻어요.\n미국에서 아주 잘터졌습니다.\n만족합니다!",
  },
];

export const REVIEW_SWIPER_ITEMS = [
  {
    id: 1,
    image: IMAGES.reviewSwiper1,
  },
  {
    id: 2,
    image: IMAGES.reviewSwiper2,
  },
  {
    id: 3,
    image: IMAGES.reviewSwiper3,
  },
  {
    id: 4,
    image: IMAGES.reviewSwiper4,
  },
  {
    id: 5,
    image: IMAGES.reviewSwiper5,
  },
];

export const REVIEW_QUESTION_ITEMS: ReviewQuestionItem[] = [
  {
    id: 1,
    image: IMAGES.v1a,
    text: "배송·수령",
  },
  {
    id: 2,
    image: IMAGES.v1b,
    text: "이용·반납",
  },
  {
    id: 3,
    image: IMAGES.v1c,
    text: "취소·환불",
  },
  {
    id: 4,
    image: IMAGES.v1d,
    text: "제휴문의",
  },
];
