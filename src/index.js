import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WrappedRouter from "./routes/WrappedRouter";
import "./scss/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <WrappedRouter>
            <App />
        </WrappedRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
