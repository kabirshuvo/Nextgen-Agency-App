"use client";
import "../styles/hero.css";
// Cannot find module '../styles/hero' or its corresponding type declarations.ts(2307)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link className="flex justify-center items-center gap-2" href="/">
      <Image
        src="/assets/images/logo.svg"
        width={32}
        height={32}
        priority
        alt="Promotopea Logo"
        className={`${isHovered ? "rotate-360" : ""} ${
          isHovered ? "glow" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <span className="hover:text-blue-700 font-bold tracking-[2px]">
        Promotopea
      </span>
    </Link>
  );
};

export default Logo;
