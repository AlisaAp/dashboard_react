import React from 'react';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function SignUpForm({ handleSubmit, handleChange, valuesPassword, valuesUserName }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleChange}
          value={valuesUserName}
          className="form-control"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>surname</Form.Label>
        <Form.Control
          type="text"
          name="surname"
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

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  valuesPassword: PropTypes.string,
  valuesUserName: PropTypes.string,
};
export default SignUpForm;
