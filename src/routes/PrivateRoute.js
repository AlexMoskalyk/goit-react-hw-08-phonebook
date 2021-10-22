import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, exact, component, isAuth }) => {
  return isAuth ? (
    <>
      {console.log("private")}
      <Route path={path} exact={exact} component={component} />
    </>
  ) : (
    <>
      {console.log("private-redirect")}
      <Redirect to="/login" />
    </>
  );
};

export default PrivateRoute;
