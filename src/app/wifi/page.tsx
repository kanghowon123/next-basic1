import AsideSection from "@/components/wifi/AsideSection/AsideSection";
import CollectionSection from "@/components/wifi/CollectionSection/CollectionSection";

export default function Wifipage() {
  return (
    <div className="pt-[130px] laptop:max-w-(--site-width) mx-auto">
      <div className="flex flex-col laptop:flex-row laptop:px-0 px-[15px]">
        <AsideSection />
        <CollectionSection />
      </div>
    </div>
  );
}
