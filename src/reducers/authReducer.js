const initialState = {
    token: undefined,
    isUserAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_TOKEN":
            localStorage.setItem(
                "expense-manager-user-token",
                action.payload.token
            );
            return {
                ...state,
                token: action.payload.token,
                isUserAuthenticated: true,
            };

        case "REMOVE_USER_TOKEN":
            localStorage.removeItem("expense-manager-user-token");
            return {
                ...state,
                token: undefined,
                isUserAuthenticated: false,
            };

        case "CHECK_USER_AUTHENTICATION":
            const userToken = localStorage.getItem(
                "expense-manager-user-token"
            );
            return {
                ...state,
                token: userToken,
                isUserAuthenticated: userToken ? true : false,
            };

        default:
            return state;
    }
};

export default authReducer;
