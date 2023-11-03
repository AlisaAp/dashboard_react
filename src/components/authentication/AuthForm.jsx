import React from 'react';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function AuthForm({ handleSubmit, handleChange, valuesPassword, valuesUserName }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="userName"
          onChange={handleChange}
          value={valuesUserName}
          className="form-control"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
          value={valuesPassword}
          className="form-control"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

AuthForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  valuesPassword: PropTypes.string,
  valuesUserName: PropTypes.string,
};
export default AuthForm;
