import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import Dashboard from "../components/dashboard/Dashboard";

function HomePage() {
  return (
    <DefaultTemplate>
      <Dashboard />
    </DefaultTemplate>
  );
}

export default HomePage;
