import Link from "next/link";
import Image from "next/image";

import logoImage from "../../assets/logo.png";
import logoWhiteImg from "../../assets/logo-w.png";

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

export default function Header() {
  return (
    <header className="top-bar border-b bg-black">
      <div className="con max-w-(--site-width) mx-auto px-[5px] h-20 flex">
        <div className="logo-box">
          <Link href="/" className="flex items-center h-full w-[85px]">
            <Image className="origin-logo" src={logoWhiteImg} alt="pc로고" />
            <Image
              className="mobile-logo hidden"
              src={logoImage}
              alt="mobile로고"
            />
          </Link>
        </div>
        <nav className="menu-box flex items-center justify-between w-full">
          <ul className="flex text-white h-full">
            {menuList.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  className="flex h-full items-center px-5"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex text-white gap-5 text-[14px] items-center">
            <li>로그인</li>
            <li>회원가입</li>
            <li>
              <div className="w-px h-6 bg-[#e5e7eb]"></div>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-6 h-6 font-bold"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
