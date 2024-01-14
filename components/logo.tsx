import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Raleway({
  weight: "400",
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <div className=" flex gap-2 items-center">
      <Image src="/logo.svg" height={30} width={30} alt="logo" />
      <h3 className={cn("text-3xl ", inter.className)}>Shopy</h3>
    </div>
  );
};

export default Logo;
