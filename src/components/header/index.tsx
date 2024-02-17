"use client";

import Link from "next/link";
import { Logo } from "../../../public/svg/Logo";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full px-4 h-[130px] lg:h-[64px]">
      <div className="h-full flex justify-between items-center px-6">
        <Link href={"/"} className=" text-4xl lg:text-2xl">
          <Logo />
        </Link>
        <div className=" text-2xl lg:text-lg ">ham</div>
      </div>
    </header>
  );
};
