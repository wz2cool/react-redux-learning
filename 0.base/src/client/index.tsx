import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import * as Models from "./models";
import AppRouter from "./containers/AppRouter";
import { AppContainer } from "react-hot-loader";
import "./index.scss";

declare var require: {
    (path: string): Models.RequireRoute;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, routeName: string) => void;
};

declare var module: {
    hot: {
        accept: (path: string, change: () => void) => void,
    },
};

ReactDOM.render(
    <AppContainer>
        <AppRouter />
    </AppContainer>,
    document.getElementById("example"));

if (module.hot) {
    module.hot.accept("./containers/AppRouter", () => {
        const NextAppRouter = require("./containers/AppRouter").default;
        ReactDOM.render(
            <AppContainer>
                <NextAppRouter />
            </AppContainer>,
            document.getElementById("example"));
    });
}
