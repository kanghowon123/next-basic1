import Link from "next/link";

type ButtonProps = {
  href: string;
  size?: "xsm" | "sm" | "md" | "lg";
  children: React.ReactNode;
  customClass: string;
};

export default function Button({
  href,
  size,
  customClass,
  children,
}: ButtonProps) {
  const sizeClasses = {
    xsm: "text-[14px] py-[8px] px-[20px]",
    sm: "text-[14px] py-[10px] px-[25px]",
    md: "text-[18px] py-[15px] px-[30px]",
    lg: "text-[20px] py-[15px] px-[40px]",
  };

  return (
    <Link
      href={href}
      className={`${customClass} border rounded-4xl hover:text-white duration-300 ${
        sizeClasses[size || "md"]
      }`}
    >
      {children}
    </Link>
  );
}
