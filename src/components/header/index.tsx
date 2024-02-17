"use client";

import Link from "next/link";
import { Logo } from "../../../public/svg/Logo";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full px-4 h-[130px] lg:h-[64px]">
      <div className="h-full flex items-center px-6 sm:px-0">
        <Link href={"/"} className=" text-4xl lg:text-2xl [&>svg]:w-60 [&>svg]:h-60 [&>svg]:sm:w-32 [&>svg]:sm:h-32">
          <Logo />
        </Link>
      </div>
    </header>
  );
};
