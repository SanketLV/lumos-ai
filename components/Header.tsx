import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex w-full items-end justify-between bg-[#020618] p-4 text-white border-b border-slate-800">
      <div className="flex items-center"></div>
      <Link href={"/login"}>
        <Button className="" size={"lg"} variant={"secondary"}>
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Header;
