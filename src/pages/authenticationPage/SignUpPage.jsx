import React from "react";
import AuthenticationTemplate from "../../templates/AuthenticationTemplate";
import SignUp from "../../components/authentication/signUp/SignUp";

function SignUpPage() {
  return (
    <AuthenticationTemplate>
      <SignUp />
    </AuthenticationTemplate>
  );
}

export default SignUpPage;
