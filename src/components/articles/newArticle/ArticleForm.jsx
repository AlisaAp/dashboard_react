import React from 'react';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function ArticleForm({ formik }) {
  const { handleSubmit, handleChange, touched, errors, values } = formik;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={handleChange}
          value={values.title}
          className={`form-control ${touched.title && errors.title ? "is-invalid" : ""
          }`}
        />
        {errors.title && touched.title && (
        <div className="invalid-feedback">{errors.title}</div>)}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          onChange={handleChange}
          value={values.description}
          className={`form-control ${touched.description && errors.description ? "is-invalid" : ""
          }`}
        />
        {errors.description && touched.description && (
        <div className="invalid-feedback">{errors.description}</div>)}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={values.category}
          onChange={handleChange}
        >
          <option value="React">React</option>
          <option value="Javascript">Javascript</option>
          <option value="HTML">HTML</option>
          <option value="other">other</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add new article
      </Button>
    </Form>
  );
}

ArticleForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formik: PropTypes.any.isRequired,

};
export default ArticleForm;
