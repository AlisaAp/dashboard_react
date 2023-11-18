import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Panel } from "rsuite";
import { logIn } from "../../../store/slices/authentication";
import AuthForm from "../AuthForm";

function SignIn() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      if (values.userName === 'student' && values.password === '1111') {
        dispatch(logIn(1));
      }
      actions.resetForm();
    },
  });

  return (
    <Panel bordered className="content-container article-item auth-form">
      <p>
        <span className="text-muted">New Here? </span>
        <Link to="/sign-up"> Create an Account</Link>
      </p>
      <AuthForm
        handleSubmit={formik.handleSubmit}
        handleChange={formik.handleChange}
        valuesPassword={formik.values.password}
        valuesUserName={formik.values.userName}
      />
    </Panel>

  );
}

export default SignIn;
