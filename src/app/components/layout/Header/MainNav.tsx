import { HeaderCommonProps } from "./types";
import { MENU_LIST } from "./constants";

import Link from "next/link";

export default function MainNav({ isScrolled }: HeaderCommonProps) {
  return (
    <nav>
      <ul
        className={` ${
          isScrolled ? "text-black" : "text-white"
        } md:flex hidden h-full`}
      >
        {MENU_LIST.map((menu) => (
          <li key={menu.name}>
            <Link
              href={menu.href}
              className="flex h-full items-center px-5 hover:text-[#95959580] transition-colors duration-500"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
