import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Guest from "../components/Dashboard/Guest";

const UnauthenticatedRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Guest} />
            <Route
                exact
                path="/signin"
                render={(props) => <AuthForm {...props} routeType={0} />}
            />
            <Route
                exact
                path="/signup"
                render={(props) => <AuthForm {...props} routeType={1} />}
            />
            <Redirect to="/" />
        </Switch>
    );
};

export default UnauthenticatedRouter;
