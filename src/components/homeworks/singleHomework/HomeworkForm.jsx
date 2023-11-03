import React from 'react';
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

function HomeworkForm({ formik }) {
  const { handleSubmit, handleChange, touched, errors, values } = formik;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>title</Form.Label>
        <Form.Control
          type="text"
          name="homework"
          onChange={handleChange}
          value={values.homework}
          className={`form-control ${touched.homework && errors.homework ? "is-invalid" : ""
          }`}
        />
        {errors.homework && touched.homework && (
        <div className="invalid-feedback">{errors.homework}</div>)}
      </Form.Group>
      <Button variant="primary" type="submit">
        send
      </Button>
    </Form>
  );
}

HomeworkForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formik: PropTypes.any.isRequired,

};
export default HomeworkForm;
