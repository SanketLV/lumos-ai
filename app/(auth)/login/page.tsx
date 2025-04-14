import { SignIn } from "@clerk/nextjs";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <SignIn routing="hash" fallbackRedirectUrl={"/upload"} />
    </div>
  );
};

export default LoginPage;
