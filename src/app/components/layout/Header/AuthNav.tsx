import { HeaderCommonProps } from "./types";

import { AUTH_LIST } from "./constants";
import Link from "next/link";

export default function AuthNav({ isScrolled }: HeaderCommonProps) {
  return (
    <div className="ml-auto">
      <ul
        className={`auth-box ${
          isScrolled ? "text-black" : "text-white"
        } flex  md:gap-5 gap-2 text-[14px] font-light h-full items-center`}
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
    </div>
  );
}
