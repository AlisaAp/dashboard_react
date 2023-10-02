import React from 'react';
import PropTypes from 'prop-types';
import { Container } from "rsuite";

function AuthenticationTemplate({ children }) {
  return (
    <Container className="auth-container">
      {children}
    </Container>
  );
}

AuthenticationTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthenticationTemplate;
