import Image from "next/image";

import { IMAGES } from "@/constants/images";
import ItemListSection from "../ItemListSection/ItemListSection";

export default function CollectionSection() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Image src={IMAGES.bestDealImage} alt="best deal" />
        </div>
        <div className="col-span-1">
          <Image src={IMAGES.collectionImage} alt="전체 모음전 보러가기" />
        </div>
      </div>
      <ItemListSection />
    </div>
  );
}
