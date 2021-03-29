import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import TopBar from "../components/TopBar";
import Guest from "../components/Dashboard/Guest";
import AuthForm from "../components/AuthForm";

const WrappedRouter = () => {
    return (
        <Router>
            <TopBar />
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
        </Router>
    );
};

export default WrappedRouter;
