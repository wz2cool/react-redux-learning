import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Main from "../Main";
import * as models from "../../models";

declare var require: {
    (path: string): models.RequireRoute;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, routeName: string) => void;
};

class AppRouter extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <Router key={Math.random()} history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute getComponent={(location, cb) => {
                        require.ensure([], (r) => {
                            const defaultComponent = require("../../routes/Main/Home").default;
                            cb(null, defaultComponent);
                        }, "Home");
                    }} />
                    <Route path="/Housework" getComponent={(location, cb) => {
                        require.ensure([], (r) => {
                            const defaultComponent = require("../../routes/Main/Housework").default;
                            cb(null, defaultComponent);
                        }, "Housework");
                    }} />
                </Route>
                <Route path="/Login" getComponent={(location, cb) => {
                    require.ensure([], (r) => {
                        const defaultComponent = require("../../routes/Login").default;
                        cb(null, defaultComponent);
                    }, "Login");
                }} />
            </Router>
        );
    }
}

export default AppRouter;
