import Button from "@/components/common/Button/Button";

export default function AsideSection() {
  return (
    <aside className="min-w-[320px]">
      <div className="sticky top-20">
        <div className="text-[#404040] font-bold">
          <p className="text-[48px]">WiFi</p>
          <p className="text-[26px]">국내 포켓와이파이</p>
        </div>
        <div className="text-[#404040] flex flex-col gap-1 pt-5 pb-10">
          <p>20GB? 무제한?</p>
          <p>어떤 와이파이가 나에게 제일 잘 맞을지</p>
          <p>앨리스가 최고의 선택지를 보여드려요!</p>
        </div>
        <Button href="#" size="xsm" customClass="text-[#4a5052]">
          데이터 속도 및 용량 지표
        </Button>
      </div>
    </aside>
  );
}
