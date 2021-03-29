/**
 * @harsh-coderc
 * @description - Main Router Wrapper for the App
 */

import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
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
                        {isUserAuthenticated ? (
                            <AuthenticatedRouter />
                        ) : (
                            <UnauthenticatedRouter />
                        )}
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
