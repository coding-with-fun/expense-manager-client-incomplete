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
        history.push(path);
    };

    return (
        <Drawer
            anchor={"left"}
            open={isDrawerOpen}
            onClose={toggleDrawer}
            className={`${themeColor}-drawer`}
        >
            <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
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
