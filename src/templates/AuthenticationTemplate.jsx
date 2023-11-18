import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from "rsuite";

function AuthenticationTemplate({ children }) {
  return (
    <Container>
      <Content className="auth-container">
        {children}
      </Content>
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
