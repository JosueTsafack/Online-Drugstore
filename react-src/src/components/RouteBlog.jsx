import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RouteRouteBlog = ({ component: Component, isAuthenticated, to, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: to,
            state: { redirect: props.location.pathname, isAuthenticated },
          }}
        />
      )
    }
  />
);

RouteRouteBlog.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

RouteRouteBlog.defaultProps = {
  to: '/',
};

export default RouteRouteBlog;
