import React from "react";
import "./styles";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";
import MainLayout from "../MainLayout";

const Main = () => {
  return (
    <div>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={() => (
                <MainLayout title={route.title}>{route.component}</MainLayout>
              )}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Main;
