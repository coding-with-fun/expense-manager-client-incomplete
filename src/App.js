import { useEffect } from "react";
import { connect } from "react-redux";
import { checkUserAuthentication } from "./actions/authActions";
import WrappedRouter from "./routes/WrappedRouter";

const App = ({ dispatch }) => {
    useEffect(() => {
        dispatch(checkUserAuthentication());
        // eslint-disable-next-line
    }, []);

    return <WrappedRouter />;
};

export default connect()(App);
