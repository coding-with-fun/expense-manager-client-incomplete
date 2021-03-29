import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { checkUserAuthentication } from "./actions/authActions";
import WrappedRouter from "./routes/WrappedRouter";

const App = ({ dispatch }) => {
    const [loadingUserToken, setLoadingUserToken] = useState(true);

    const handleAuthenticateUser = async () => {
        await dispatch(checkUserAuthentication());
        setLoadingUserToken(false);
    };

    useEffect(() => {
        handleAuthenticateUser();
        // eslint-disable-next-line
    }, []);

    return <WrappedRouter loadingUserToken={loadingUserToken} />;
};

export default connect()(App);
