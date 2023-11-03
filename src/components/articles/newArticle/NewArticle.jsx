import React from 'react';
import { useFormik } from "formik";
import { Modal, Button, Panel } from "rsuite";
import * as Yup from 'yup';
import ArticleForm from "./ArticleForm";
import { useCreateArticleMutation } from "../../../store/api/articlesApi";
import s from './style.module.css';

function NewArticle() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [createArticle] = useCreateArticleMutation();

  const formik = useFormik({
    initialValues: {
      title: '',
      publicationDate: new Date().toLocaleDateString(),
      description: '',
      category: '',
    },
    onSubmit: (values, actions) => {
      createArticle(values);
      actions.resetForm();
      handleClose();
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      description: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    }),
  });
  return (
    <>
      <Modal open={open} onClose={handleClose} size="md" backdrop="static">
        <Modal.Header>
          <Modal.Title>New article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArticleForm
            formik={formik}
            handleClose={handleClose}

          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Panel bordered shaded className={s.container}>
        <Button onClick={handleOpen}>Add new article</Button>
      </Panel>

    </>
  );
}

export default NewArticle;
