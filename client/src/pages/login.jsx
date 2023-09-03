import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

function login() {

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user: { displayName: name, email, photoURL: profileImage } } = await signInWithPopup(firebaseAuth, provider);

      if (email) {

      }


    } catch(err) {
      console.error('Error - ', error);
    }
  };

  return <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
    <div className="flex justify-center items-center gap-2 text-white ">
      <Image
        src="/whatsapp.gif"
        alt="chat"
        height={300}
        width={300}
      />
      <span className="text-7xl">Let's Chat</span>
    </div>
    <button className="flex justify-center items-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={handleLogin}>
      <FcGoogle className="text-4xl"/>
      <span className="text-white text-2xl">
        Login with Google
      </span>
    </button>
  </div>;
}

export default login;
