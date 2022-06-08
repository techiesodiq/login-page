import React from "react";
import "../App.css";
import Form from "../components/Form";
import Header from "../components/Header";
import Onboarding from "../components/Onboarding";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  return (
    <div className="flex">
      {/* Main section */}
      <main className="mobile-display w-1/3 bg-primary h-screen py-12 px-16">
        <Header />
        <Form />
        <SocialLogin />
      </main>

      {/* Onboarding section */}
      <section className="no-display w-2/3 h-screen">
        <Onboarding />
      </section>
    </div>
  );
};

export default Login;
