import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../components/Dashboard/Home";

const AuthenticatedRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AuthenticatedRouter;
