/**
 * @harsh-coderc
 * @description - App bar
 */

import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AppBarDrawer from "./AppBarDrawer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    titleLink: {
        cursor: "pointer",
    },
}));

const TopBar = ({ isUserAuthenticated, themeColor }) => {
    const history = useHistory();
    const classes = useStyles();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleRoute = (path) => {
        history.push(path);
    };

    return (
        <AppBar position="sticky" className={`${themeColor}-theme`}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <span
                        onClick={() => handleRoute("/")}
                        className={classes.titleLink}
                    >
                        Expense Manager
                    </span>
                </Typography>
                {!isUserAuthenticated && (
                    <Button
                        color="inherit"
                        onClick={() => handleRoute("/signin")}
                    >
                        Sign In
                    </Button>
                )}
                <AppBarDrawer
                    isDrawerOpen={isDrawerOpen}
                    toggleDrawer={toggleDrawer}
                />
            </Toolbar>
        </AppBar>
    );
};

export default connect((state) => {
    return {
        isUserAuthenticated: state.auth.isUserAuthenticated,
        themeColor: state.theme.themeColor,
    };
})(TopBar);
