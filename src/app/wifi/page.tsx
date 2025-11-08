import AsideSection from "@/components/wifi/AsideSection/AsideSection";
import CollectionSection from "@/components/wifi/CollectionSection/CollectionSection";

export default function Wifipage() {
  return (
    <div className="pt-[130px] max-w-(--site-width) mx-auto">
      <div className="flex ">
        <AsideSection />
        <CollectionSection />
      </div>
    </div>
  );
}
