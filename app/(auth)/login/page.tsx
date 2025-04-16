import { SignIn } from "@clerk/nextjs";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#020618] text-white">
      <SignIn fallbackRedirectUrl={"/upload"} />
    </div>
  );
};

export default LoginPage;
