"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

import { AUTH_LIST, MENU_LIST } from "./constants";
import { HeaderCommonProps } from "./types";

export default function AuthNav({ isScrolled }: HeaderCommonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="ml-auto">
      <ul
        className={`auth-box ${
          isScrolled ? "text-black" : "text-white"
        } flex relative md:gap-5 gap-2 text-[14px] font-light h-full items-center`}
      >
        {AUTH_LIST.map((auth) => (
          <li
            key={auth.name}
            className="md:block hidden hover:text-[#FFFFFF80] transition-colors duration-500"
          >
            <Link href={auth.href}>{auth.name}</Link>
          </li>
        ))}
        <li className="md:block hidden">
          <div
            className={`${isScrolled ? "bg-black" : "bg-[#e5e7eb]"} w-px h-6`}
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
          <button className="block cursor-pointer" onClick={toggleMenu}>
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
      {/* 모바일 메뉴 */}

      <ul
        className={`absolute top-0 right-0 pt-20 h-screen bg-[#ffffff] duration-300 ${
          isMenuOpen ? "w-[300px]" : "w-0"
        }`}
      >
        <button
          className={`block absolute right-80 top-8 cursor-pointer ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {MENU_LIST.map((list) => {
          const isActive = pathname === list.href;
          return (
            <li key={list.name}>
              <Link
                href={list.href}
                className={`text-[#4e4e4ee6] py-3.5 px-5 flex ${
                  isActive ? "font-bold" : "font-normal"
                }`}
              >
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
