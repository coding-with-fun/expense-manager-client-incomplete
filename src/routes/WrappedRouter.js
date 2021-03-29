/**
 * @harsh-coderc
 * @description - Main Router Wrapper for the App
 */

import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Guest from "../components/Dashboard/Guest";
import TopBar from "../components/TopBar";

const WrappedRouter = () => {
    return (
        <div className="light-theme">
            <Router>
                <TopBar />
                <div className="body-container">
                    <Switch>
                        <Route exact path="/" component={Guest} />
                        <Route
                            exact
                            path="/signin"
                            render={(props) => (
                                <AuthForm {...props} routeType={0} />
                            )}
                        />
                        <Route
                            exact
                            path="/signup"
                            render={(props) => (
                                <AuthForm {...props} routeType={1} />
                            )}
                        />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default WrappedRouter;
