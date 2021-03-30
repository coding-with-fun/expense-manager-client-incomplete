import React from "react";
import { Brightness6 as Brightness6Icon } from "@material-ui/icons";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { connect } from "react-redux";
import { toggleTheme } from "../../actions/themeActions";
import { Divider } from "@material-ui/core";

const Settings = ({ dispatch, themeColor }) => {
    const handleToggleTheme = (event) => {
        console.log(event.target.checked);

        dispatch(toggleTheme(event.target.checked ? "dark" : "light"));
    };

    return (
        <div className="settings-container">
            <div className="settings-body container">
                <div className="settings-title">Settings</div>
                <Divider />
                <div className="settings-content">
                    <div className="settings-item">
                        <div className="data">
                            <div className="icon">
                                <Brightness6Icon />
                            </div>
                            <div className="heading">Theme</div>
                        </div>

                        <div className="action-container">
                            <WbSunnyIcon />
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    defaultChecked={themeColor === "dark"}
                                    onChange={(e) => handleToggleTheme(e)}
                                />
                                <span className="slider round"></span>
                            </label>
                            <Brightness3Icon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect((state) => {
    return {
        themeColor: state.theme.themeColor,
    };
})(Settings);
