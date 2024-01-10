import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { StyleProvider, StyleContext } from "./components/context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <StyleProvider>
            <App StyleContext={StyleContext} />
        </StyleProvider>
    </React.StrictMode>
);
