import React from "react";
import AuthenticationTemplate from "../../templates/AuthenticationTemplate";
import SignIn from "../../components/authentication/signIn/SignIn";

function SignUpPage() {
  return (
    <AuthenticationTemplate>
      <SignIn />
    </AuthenticationTemplate>
  );
}

export default SignUpPage;
