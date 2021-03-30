const initialState = {
    themeColor: "light",
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_THEME":
            const themeColor = localStorage.getItem(
                "expense-manager-user-theme"
            );
            return {
                themeColor: themeColor || "light",
            };

        case "TOGGLE_THEME":
            localStorage.setItem(
                "expense-manager-user-theme",
                action.payload.color
            );
            return {
                themeColor: action.payload.color,
            };

        default:
            return state;
    }
};

export default themeReducer;
