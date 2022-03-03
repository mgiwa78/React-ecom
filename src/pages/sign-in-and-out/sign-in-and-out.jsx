import React from "react";
import SignIn from "../sign-in/sign-in.component";
import { SignUp } from "../../components/sign-up/sign-up.component";
import FormInput from "../../components/form-input.component/form-input.component";
import "./sign-in-and-out.scss";

const SignInAndSignOut = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignOut;
