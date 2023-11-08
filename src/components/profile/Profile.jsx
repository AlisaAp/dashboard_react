import React from 'react';
import { Panel, Button } from "rsuite";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import PropTypes from "prop-types";
import { useUpdateUserProfileMutation, useGetUserByIdQuery } from "../../store/api/usersApi";
import s from './style.module.css';

function Profile() {
  const id = useSelector((state) => state.authentication.currentUser);
  const { data, isLoading } = useGetUserByIdQuery(id);
  const [updateUserProfile] = useUpdateUserProfileMutation();
  if (isLoading) return null;
  const { userData } = data;

  return (
    <Panel bordered className={s.profile}>
      <Formik
        initialValues={{
          name: userData.name,
          surname: userData.surname,
          city: userData.city,
          birthDate: userData.birthDate,
          phone: userData.phone,
          gender: userData.gender,
          avatar: userData.avatar,
        }}
        onSubmit={(values) => {
          updateUserProfile({
            id,
            userData: values,
          }).unwrap();
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} className={s.form}>
            <Form.Group className="mb-3">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={props.values.name}
                onChange={props.handleChange}
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                className="form-control"
                value={props.values.surname}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>city</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={props.values.city}
                onChange={props.handleChange}
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>birth date</Form.Label>
              <Form.Control
                type="date"
                name="birthDate"
                className="form-control"
                value={props.values.birthDate}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>phone number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                className="form-control"
                value={props.values.phone}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group className={`mb-3 ${s.radio}`}>
              <Form.Label>male</Form.Label>
              <input
                defaultValue="male"
                style={{
                  width: "100%",
                }}
                type="radio"
                name="gender"
                onChange={props.handleChange}
                checked={userData.gender === 'male' ? 'checked' : null}
              />
              <Form.Label>female</Form.Label>
              <input
                defaultValue="female"
                style={{
                  width: "100%",
                }}
                type="radio"
                name="gender"
                onChange={props.handleChange}
                checked={userData.gender === 'female' ? 'checked' : null}
              />
            </Form.Group>
            <Button color="cyan" appearance="ghost" type="submit">
              Save
            </Button>
          </Form>
        )}
      </Formik>
      <div className={s.avatarBox}>
        <img
          src={userData.avatar}
          alt="avatar"
          width={400}
          height={400}
          className={s.avatar}
        />
      </div>
    </Panel>
  );
}

Profile.propTypes = {
  values: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
export default Profile;
