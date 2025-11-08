"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  return (
    <header
      className={`top-bar ${
        isScrolled ? "bg-[#ffffffe6]" : ""
      } fixed w-full z-100`}
    >
      <div className="con max-w-(--site-width) mx-auto px-[5px] h-20 flex">
        <Logo isScrolled={isScrolled} />
        <MainNav isScrolled={isScrolled} />
        <AuthNav isScrolled={isScrolled} />
      </div>
    </header>
  );
}
