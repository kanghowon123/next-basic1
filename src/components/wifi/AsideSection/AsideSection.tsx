import Button from "@/components/common/Button/Button";
import { styles } from "./AsideSection.styles";

export default function AsideSection() {
  return (
    <aside className={styles.sectionHeader}>
      <div className={styles.headerInner}>
        <div className={styles.headerTitle}>
          <p className={styles.headerTitleText}>WiFi</p>
          <p className={styles.headerSubTitleText}>국내 포켓와이파이</p>
        </div>
        <div className={styles.headerDes}>
          <p>20GB? 무제한?</p>
          <p>어떤 와이파이가 나에게 제일 잘 맞을지</p>
          <p>앨리스가 최고의 선택지를 보여드려요!</p>
        </div>
        <Button href="#" size="xsm" customClass="text-[#4a5052]">
          <span className="hidden laptop:inline">데이터 속도 및 용량 지표</span>
          <span className="laptop:hidden">속도 및 용량지표</span>
        </Button>
      </div>
    </aside>
  );
}
