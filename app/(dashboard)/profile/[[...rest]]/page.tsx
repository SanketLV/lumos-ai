import { UserProfile } from "@clerk/nextjs";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
