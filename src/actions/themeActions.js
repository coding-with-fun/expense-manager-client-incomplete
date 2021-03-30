export const setTheme = () => {
    return {
        type: "SET_THEME",
    };
};

export const toggleTheme = (color) => {
    return {
        type: "TOGGLE_THEME",
        payload: {
            color,
        },
    };
};
