"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // 추가

import Logo from "./Logo";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname(); //  현재 경로 가져오기

  const isHome = pathname === "/";

  useEffect(() => {
    let timeoutId: any = null;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const handleScroll = () => {
      console.log("실행");
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 30);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const activeScrolled = isHome ? isScrolled : true;

  return (
    <header
      className={`top-bar ${
        activeScrolled ? "bg-[#ffffffe6]" : ""
      } fixed w-full z-100`}
    >
      <div
        className={`con max-w-(--site-width) mx-auto px-[5px] h-20 flex ${
          activeScrolled ? "text-black" : "text-white"
        }`}
      >
        <Logo isScrolled={activeScrolled} />
        <MainNav isScrolled={activeScrolled} />
        <AuthNav isScrolled={activeScrolled} />
      </div>
    </header>
  );
}
