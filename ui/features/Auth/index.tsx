import React from "react";
import { Route } from "react-router";
import { LoginPage } from "./LoginPage";

export default () => (
  <Route>
    <Route path="/auth/login" component={LoginPage}></Route>
  </Route>
);
