import React from 'react';
import PropTypes from 'prop-types';
import { Content, Container } from "rsuite";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

function DefaultTemplate({ children }) {
  return (
    <Container>
      <Header />
      <Container className="main-container">
        <Sidebar />
        <Content>
          {children}
        </Content>
      </Container>
      <Footer>Footer</Footer>
    </Container>
  );
}

DefaultTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultTemplate;
