import React from "react";
import heroImg from "../assets/images/man-bg.svg";

const onboarding = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="m-8 text-primary text-onboardingHeader leading-7 font-medium">
        Organize your customer information
      </h1>

      <img src={heroImg} alt="hero" className="m-8" />

      {/* carousel pointers */}
      <div className="m-8 flex justify-center items-center">
        <div className="mx-1 rounded w-2 h-2 bg-primary"></div>
        <div className="mx-1 rounded w-2 h-2 bg-secondary"></div>
        <div className="mx-1 rounded w-2 h-2 bg-secondary"></div>
        <div className="mx-1 rounded w-2 h-2 bg-secondary"></div>
      </div>
    </div>
  );
};

export default onboarding;
