/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Form = () => {
  return (
    <div className="mt-12">
      <form className="text-white mt-4">
        <h2 className="text-onboardingHeader pb-6">
          Log into your Business Manager
        </h2>
        <div className="mb-4">
          <label>Email Address</label>
          <input
            type="text"
            placeholder="someone@email.com"
            className="w-full rounded-md mt-2 p-3"
          />
        </div>
        <div className="my-6">
          <label>Enter Your Password</label>
          <div className="flex">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md mt-2 p-3"
            />

            <button className="opacity-30 py-4 mt-2 text-black ml-eye rounded-md">
              <AiOutlineEyeInvisible size="22px" />
            </button>
          </div>
        </div>

        <button className="w-full rounded-md border p-3">SIGN IN</button>
        <div className="mt-6 flex justify-center items-center">
          <p className="text-white-100 opacity-50">Don't have an account?</p>
          <a href="#" className="ml-1 font-bold">
            {" "}
            Sign Up
          </a>
        </div>
        <div className="flex justify-center items-center mt-5">
          <a href="#" className="font-bold">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
