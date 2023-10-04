import React, { useState } from "react";
import Image from "next/image";
import Input from '../components//common/Input';
import { useStateProvider } from "../context/StateContext";
import Avatar from "../components/common/Avatar";

function register() {
  const [{ userInfo }, dispatch] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("Hey There !");
  const [image, setImage] = useState("/default_avatar.png");

  return <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
    <div className="flex items-center justify-center gap-2">
      <Image
        src="/whatsapp.gif"
        alt="chat"
        height={300}
        width={300}
      />
      <span className="text-7xl">Let's Chat</span>
    </div>
    <h2 className="text-2xl mt-8">Create your Profile</h2>
    <div className="flex gap-6 mt-6">
      <div className="flex flex-col items-center justify-center mt-5 gap-6">
        <Input
          name="Display Name"
          state={name}
          setState={setName}
          label={true}
        />
        <Input
          name="About"
          state={about}
          setState={setAbout}
          label={true}
        />
      </div>
      <div>
        <Avatar type="xl" image={image} />
      </div>
    </div>
  </div>;
}

export default register;
