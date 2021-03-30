import React from "react";
import { Brightness6 as Brightness6Icon } from "@material-ui/icons";
import { connect } from "react-redux";
import { toggleTheme } from "../../actions/themeActions";

const Settings = ({ dispatch, themeColor }) => {
    const handleToggleTheme = (event) => {
        console.log(event.target.checked);

        dispatch(toggleTheme(event.target.checked ? "light" : "dark"));
    };

    return (
        <div className="settings-container">
            <div className="settings-body">
                <div className="settings-title">Settings</div>

                <div className="settings-content">
                    <div className="settings-item">
                        <div className="data">
                            <div className="icon">
                                <Brightness6Icon />
                            </div>
                            <div className="heading">Theme</div>
                        </div>
                        <div className="action-container">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    defaultChecked={themeColor === "light"}
                                    onChange={(e) => handleToggleTheme(e)}
                                />
                                <span className="slider round"></span>
                            </label>
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
