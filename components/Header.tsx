import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex w-full items-end justify-between bg-[#f5f5f5] p-4">
      <div className="flex items-center"></div>
      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </div>
  );
};

export default Header;
