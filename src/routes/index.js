import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Admin from "../pages/Admin";
import Contato from '../pages/Contato';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/index" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/contato" component={Contato} />
      <Route path="/admin" component={Admin} isPrivate />

      <Route path="/" component={() => <h1>404 - Page not found </h1>} />
    </Switch>
  );
}
