import React from "react";
import routes from "../../constants/routes";
import { Switch, Route } from "react-router-dom";
import { MainLayout } from "../../components";

const Main = () => {
  return (
    <div>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={(props) => {
                const Comp = route.component;
                return <MainLayout title={route.title}>{Comp}</MainLayout>;
              }}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Main;
