import React from 'react';
import { ArrowLeftLine } from "@rsuite/icons";
import { IconButton } from "rsuite";
import Error from "../components/error/Error";

function ErrorPage() {
  return (
    <Error>
      <p className="error-page-title">Oops… You just found an error page</p>
      <p className="error-page-subtitle text-muted ">
        The current page is unavailable or you do not have permission to access.
      </p>
      <IconButton icon={<ArrowLeftLine />} appearance="primary" href="/">
        Take me home
      </IconButton>
    </Error>
  );
}

export default ErrorPage;
