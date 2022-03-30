import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Firebase/AuthContext";

export default function PrivateRouter({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("inside private Route");
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
