"use client";

import { usePathname } from "next/navigation";

import { HeaderCommonProps } from "./types";
import { MENU_LIST } from "./constants";

import Link from "next/link";

export default function MainNav({ isScrolled }: HeaderCommonProps) {
  const pathname = usePathname();
  return (
    <nav>
      <ul
        className={` ${
          isScrolled ? "text-black" : "text-white"
        } md:flex hidden h-full`}
      >
        {MENU_LIST.map((menu) => {
          const isActive = pathname === menu.href;
          return (
            <li key={menu.name}>
              <Link
                href={menu.href}
                className={`${
                  isActive ? "font-bold" : "font-normal"
                } flex h-full items-center px-5 hover:text-[#95959580] transition-colors duration-500`}
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
