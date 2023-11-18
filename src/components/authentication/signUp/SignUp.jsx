import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Panel } from "rsuite";
import { logIn } from "../../../store/slices/authentication";
import SignUpForm from "./SignUpForm";
// import s from "./style.module.css";

function SignUp() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      birthDate: "",
      city: "",
      phone: '',
      gender: '',
      email: "",
      password: "",
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
        <span>Already have an account?</span>
        <Link to="/sign-in">Sign in here</Link>
      </p>
      <SignUpForm
        handleSubmit={formik.handleSubmit}
        handleChange={formik.handleChange}
        valuesPassword={formik.values.password}
        valuesUserName={formik.values.userName}
      />
    </Panel>
  );
}

export default SignUp;
