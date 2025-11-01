"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logoImage from "../../../../assets/images/logo.png";
import logoWhiteImg from "../../../../assets/images/logo-w.png";

const menuList = [
  {
    name: "임대방법",
    href: "#",
  },
  {
    name: "WiFi",
    href: "#",
  },
  {
    name: "HomeFi",
    href: "#",
  },
  {
    name: "WonderFi",
    href: "#",
  },
  {
    name: "찾아오는길",
    href: "#",
  },
  {
    name: "브랜드스토리",
    href: "#",
  },
];

const authList = [
  {
    name: "로그인",
    href: "#",
  },
  {
    name: "회원가입",
    href: "#",
  },
];

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 30) {
  //       console.log("실행");
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      className={`top-bar ${
        isScrolled ? "bg-[#ffffff80]" : ""
      } fixed w-full z-100`}
    >
      <div className="con max-w-(--site-width) mx-auto px-[5px] h-20 flex">
        <div className="logo-box pr-8 md:pl-0 pl-6">
          <Link href="/" className="flex items-center h-full w-[85px]">
            <Image
              className={`white-logo ${isScrolled ? "hidden" : "block  "}`}
              src={logoWhiteImg}
              alt="흰색 로고"
            />
            <Image
              className={`logo ${isScrolled ? "block" : "hidden"}`}
              src={logoImage}
              alt="로고"
            />
          </Link>
        </div>
        <nav
          className={`menu-box w-full flex items-center md:justify-between justify-end `}
        >
          <ul
            className={` ${
              isScrolled ? "text-black" : "text-white"
            } md:flex hidden h-full`}
          >
            {menuList.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  className="flex h-full items-center px-5 hover:text-[#FFFFFF80] transition-colors duration-500"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul
            className={`auth-box ${
              isScrolled ? "text-black" : "text-white"
            } flex  md:gap-5 gap-2 text-[14px] font-light items-center`}
          >
            {authList.map((auth) => (
              <li
                key={auth.name}
                className="md:block hidden hover:text-[#FFFFFF80] transition-colors duration-500"
              >
                <Link href={auth.href}>{auth.name}</Link>
              </li>
            ))}
            <li className="md:block hidden">
              <div
                className={`${
                  isScrolled ? "bg-black" : "bg-[#e5e7eb]"
                } w-px h-6`}
              ></div>
            </li>
            <li className="hover:text-[#FFFFFF80] transition-colors duration-500">
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </Link>
            </li>
            <li className="md:hidden block md:pr-0 pr-5">
              <button className="block cursor-pointer">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
