import React from 'react';
import { Button, Modal, Panel } from "rsuite";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import HomeworkItem from "../HomeworkItem";
import { useGetHomeworkByIdQuery, useSendHomeworkByIdMutation } from "../../../store/api/homeworksApi";
import s from "../style.module.css";
import HomeworkForm from "./HomeworkForm";

function SingleHomework({ courseId, homeworkId, userId }) {
  const { data: homework, isLoading } = useGetHomeworkByIdQuery({
    userId, courseId, homeworkId,
  });
  const [open, setOpen] = React.useState(false);
  const [sendHomework] = useSendHomeworkByIdMutation();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const formik = useFormik({
    initialValues: {
      homework: '',
    },
    onSubmit: (values, actions) => {
      sendHomework({
        userId,
        homeworkId,
        link: values.homework,
        status: 'checking',
        grade: 0,
      }).unwrap();
      actions.resetForm();
      handleClose();
    },
    validationSchema: Yup.object().shape({
      homework: Yup.string()
        .required('Required'),
    }),
  });

  if (isLoading) return null;
  return (
    <Panel className={s.homework}>
      <HomeworkItem userHomework={homework} />
      <Button
        appearance="primary"
        onClick={handleOpen}
      >
        send homework
      </Button>
      <Modal open={open} onClose={handleClose} size="md" backdrop="static">
        <Modal.Header>
          <Modal.Title>Add homework</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HomeworkForm formik={formik} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Panel>
  );
}

SingleHomework.propTypes = {
  courseId: PropTypes.string,
  homeworkId: PropTypes.string,
  userId: PropTypes.number,
};
export default SingleHomework;
