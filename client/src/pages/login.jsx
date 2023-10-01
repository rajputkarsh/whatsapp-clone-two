
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { API_URLS } from '../constants/urls';
import { useRouter } from "next/router";
import { useStateProvider } from '../context/StateContext';
import StateActions from "../context/StateActions";

function login() {
  const router = useRouter();
  const [{}, dispatch] = useStateProvider();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user: { displayName: name, email, photoURL: profileImage } } = await signInWithPopup(firebaseAuth, provider);

      if (email) {
        const { data: apiResponse } = await axios.post(API_URLS.AUTH_CHECK_USER(), { email });

        if (!apiResponse?.userExists) {
          // need to register the user
          dispatch({
            type: StateActions.SET_NEW_USER,
            data: {
              newUser: true,
            },
          });
          dispatch({
            type: StateActions.SET_USER_INFO,
            data: {
              userInfo: {
                name,
                email,
                profileImage,
                status: ""
              },
            },
          })
          router.push(`/register`);
        } else {
          // login successful
        }

      }

    } catch(error) {
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
