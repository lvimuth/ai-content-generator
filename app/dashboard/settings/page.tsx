import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <UserProfile />
    </div>
  );
}

export default Settings;
