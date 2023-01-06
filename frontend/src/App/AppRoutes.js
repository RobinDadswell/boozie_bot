import PropTypes from 'prop-types';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'Components/NotFound';
import HomeIndexConnector from 'Home/HomeIndexConnector'
import ColourIndexConnector from 'Colours/ColourIndexConnector';

function AppRoutes(props) {
  const {
    app
  } = props;

  return (
    <Routes>
      {/*
        Home
      */}

      <Route
        exact={true}
        path="/"
        element={ <HomeIndexConnector /> }
      />

      <Route
        exact={true}
        path="/colours"
        element={ <ColourIndexConnector /> }
      />
    </Routes>
  );
}

AppRoutes.propTypes = {
  app: PropTypes.func.isRequired
};

export default AppRoutes;
