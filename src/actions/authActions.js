import { request } from "../shared/RequestWrapper";

export const checkUserAuthentication = () => {
    return (dispatch) => {
        request({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "GET",
        })
            .then((res) => {
                dispatch(setUserToken("asa"));
                console.log("Request Successful ::: ", res);
            })
            .catch((error) => {
                dispatch(removeUserToken());
                console.log("Request Failed ::: ", error);
            });
    };
};

export const setUserToken = (token) => {
    return {
        type: "SET_USER_TOKEN",
        payload: {
            token,
        },
    };
};

export const removeUserToken = () => {
    return {
        type: "REMOVE_USER_TOKEN",
    };
};
