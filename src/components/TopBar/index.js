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
import { Link } from "react-router-dom";
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
        marginTop: "2px",
    },
}));

const TopBar = () => {
    const classes = useStyles();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <AppBar position="sticky" className="light-theme">
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
                    <Link to="/">Expense Manager</Link>
                </Typography>
                <Button color="inherit">
                    <Link to="/signin">Sign In</Link>
                </Button>
                <AppBarDrawer
                    isDrawerOpen={isDrawerOpen}
                    toggleDrawer={toggleDrawer}
                />
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
