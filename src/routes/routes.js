import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Strings } from "../constants";
import {
  About,
  Contact,
  Error,
  Furniture,
  Home,
  Project,
  ScrollToTop,
  Work,
} from "../components";

const Routes = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Switch>
        <Route path={Strings.APPLICATION.ROUTES.HOME} exact component={Home} />
        <Route
          path={Strings.APPLICATION.ROUTES.PROJECT}
          exact
          component={Project}
        />
        <Route
          path={Strings.APPLICATION.ROUTES.FURNITURE}
          exact
          component={Furniture}
        />
        <Route path={Strings.APPLICATION.ROUTES.WORK} component={Work} />
        <Route path={Strings.APPLICATION.ROUTES.ABOUT} component={About} />
        <Route path={Strings.APPLICATION.ROUTES.CONTACT} component={Contact} />
        <Route
          path={[
            Strings.APPLICATION.ROUTES.ALL,
            Strings.APPLICATION.ROUTES.ERROR,
          ]}
          component={Error}
        />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
