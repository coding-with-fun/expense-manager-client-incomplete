import { request } from "../shared/RequestWrapper";

export const checkUserAuthentication = () => {
    return (dispatch) => {
        dispatch(fetchingUserToken(true));
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
            })
            .finally(() => {
                dispatch(fetchingUserToken(false));
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

export const fetchingUserToken = (isLoading) => {
    return {
        type: "FETCHING_USER_TOKEN",
        payload: {
            isLoading,
        },
    };
};
