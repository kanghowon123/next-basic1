import Image from "next/image";
import Link from "next/link";

import logoImage from "@/assets/images/logo.png";
import logoWhiteImg from "@/assets/images/logo-w.png";
import { HeaderCommonProps } from "./types";

export default function Logo({ isScrolled }: HeaderCommonProps) {
  return (
    <div className="logo-box pr-8 md:pl-0 pl-6">
      <Link href="/" className="flex items-center h-full w-[85px]">
        <Image
          className="logo"
          src={isScrolled ? logoImage : logoWhiteImg}
          alt="로고"
        />
      </Link>
    </div>
  );
}
