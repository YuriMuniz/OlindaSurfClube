import React from "react";

import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

import { store } from "../store";
import DefaultLayout from "../pages/_layouts/default";
import AuthLayout from "../pages/_layouts/auth";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (rest.path === "/login") {
    if (signed) {
      return <Redirect to="/" />;
    }
  }
  const Layout = rest.path === "/login" ? AuthLayout : DefaultLayout;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
