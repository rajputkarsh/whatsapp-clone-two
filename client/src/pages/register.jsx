import React from "react";
import Image from "next/image";
import { useStateProvider } from "../context/StateContext";

function register() {
  const [{userInfo}, dispatch] = useStateProvider();
  return <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
    <div className="flex items-center justify-ceenter gap-2">
      <Image
        src="/whatsapp.gif"
        alt="chat"
        height={300}
        width={300}
      />
      <span className="text-7xl">Let's Chat</span>
    </div>
    <h2 className="text-xl">Create your Profile</h2>
    <div className="flex-gap-6 mt-6">
      <div className="flex flex-col items-center justify-center mt-5 gap-6">
        {userInfo?.name || "NAME"}
      </div>
    </div>
  </div>;
}

export default register;
