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
import { Mail as MailIcon, MoveToInbox as InboxIcon } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
});

const AppBarDrawer = ({ isDrawerOpen, toggleDrawer }) => {
    const classes = useStyles();

    return (
        <Drawer
            anchor={"left"}
            open={isDrawerOpen}
            onClose={toggleDrawer}
            className="light-drawer"
        >
            <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map(
                        (text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
};

export default AppBarDrawer;
