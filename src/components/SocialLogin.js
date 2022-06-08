import React from "react";
import googleIcon from "../assets/images/google-icon.svg";

const SocialLogin = () => {
  return (
    <div className="mt-6">
      <button className="flex items-center justify-center bg-white text-black p-3 w-full rounded-md">
        <img src={googleIcon} alt="Google icon" className="mr-5 ml-0" />{" "}
        <span className="opacity-96">Log in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
