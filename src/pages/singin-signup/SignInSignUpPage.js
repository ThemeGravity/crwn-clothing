import React from "react";

import SingIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import './singin-signup.styles.scss';

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SingIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
