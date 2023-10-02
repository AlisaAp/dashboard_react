import React from 'react';
import './style.css';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Panel } from "rsuite";
import { logIn } from "../../store/slices/authentication";
import AuthForm from "./AuthForm";

function Authentication() {
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
      <AuthForm
        handleSubmit={formik.handleSubmit}
        handleChange={formik.handleChange}
        valuesPassword={formik.values.password}
        valuesUserName={formik.values.userName}
      />
    </Panel>
  );
}

export default Authentication;
