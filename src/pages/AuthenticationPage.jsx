import React from "react";
import AuthenticationTemplate from "../templates/AuthenticationTemplate";
import Authentication from "../components/authentication/Authentication";

function AuthenticationPage() {
  return (
    <AuthenticationTemplate>
      <Authentication />
    </AuthenticationTemplate>
  );
}

export default AuthenticationPage;
