/**
 * @harsh-coderc
 * @description - Main Router Wrapper for the App
 */

import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from "../components/Settings";
import TopBar from "../components/TopBar";
import AuthenticatedRouter from "./AuthenticatedRouter";
import UnauthenticatedRouter from "./UnauthenticatedRouter";

const WrappedRouter = ({ isUserAuthenticated, fetchingUserToken }) => {
    return (
        <div className="light-theme">
            {!fetchingUserToken ? (
                <Router>
                    <TopBar />
                    <div className="body-container">
                        <Switch>
                            <Route
                                exact
                                path="/settings"
                                component={Settings}
                            />

                            {isUserAuthenticated ? (
                                <AuthenticatedRouter />
                            ) : (
                                <UnauthenticatedRouter />
                            )}
                        </Switch>
                    </div>
                </Router>
            ) : null}
        </div>
    );
};

export default connect((state) => {
    return {
        isUserAuthenticated: state.auth.isUserAuthenticated,
        fetchingUserToken: state.auth.fetchingUserToken,
    };
})(WrappedRouter);
