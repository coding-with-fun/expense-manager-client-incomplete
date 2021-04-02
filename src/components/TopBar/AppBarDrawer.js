/**
 * @harsh-coderc
 * @description - Side drawer for App bar
 * @params
 *      - isDrawerOpen -> Flag to open and close Drawer
 *      - toggleDrawer -> Function to toggle Drawer
 */

import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    Home as HomeIcon,
    List as ListIcon,
    Settings as SettingsIcon,
} from "@material-ui/icons";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { FilledButton, OutlinedButton } from "../../HOC/Buttons";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
});

const mainDrawer = [
    {
        name: "Home",
        icon: <HomeIcon />,
        route: "/",
    },
];

const commonDrawer = [
    {
        name: "Settings",
        icon: <SettingsIcon />,
        route: "/settings",
    },
];

const authenticatedDrawer = [
    {
        name: "Transactions",
        icon: <ListIcon />,
        route: "/transactions",
    },
];

const AppBarDrawer = ({
    isDrawerOpen,
    toggleDrawer,
    isUserAuthenticated,
    themeColor,
}) => {
    const history = useHistory();
    const classes = useStyles();

    const [drawerOptions] = useState([
        ...mainDrawer.concat(isUserAuthenticated ? authenticatedDrawer : []),
    ]);

    const handleRoute = (path) => {
        toggleDrawer();
        history.push(path);
    };

    return (
        <Drawer
            anchor={"left"}
            open={isDrawerOpen}
            onClose={toggleDrawer}
            className={`${themeColor}-drawer`}
        >
            <div className={classes.list} role="presentation">
                <List>
                    {drawerOptions.map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            onClick={() => handleRoute(item.route)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {commonDrawer.map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            onClick={() => handleRoute(item.route)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                {!isUserAuthenticated && (
                    <div className="auth-buttons">
                        <div
                            className="sign-in-button"
                            onClick={() => handleRoute("/signin")}
                        >
                            Sign In
                        </div>
                        <FilledButton
                            title="Sign In"
                            variant={themeColor}
                            name="sign-in"
                        />
                        <OutlinedButton
                            title="Sign Up"
                            variant={themeColor}
                            name="sign-up"
                        />
                        <div
                            className="sign-up-button"
                            onClick={() => handleRoute("/signup")}
                        >
                            Sign Up
                        </div>
                    </div>
                )}
            </div>
        </Drawer>
    );
};

export default connect((state) => {
    return {
        isUserAuthenticated: state.auth.isUserAuthenticated,
        themeColor: state.theme.themeColor,
    };
})(AppBarDrawer);
