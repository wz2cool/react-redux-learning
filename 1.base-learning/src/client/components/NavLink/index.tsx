import * as React from "react";
import { Link } from "react-router";

class NavLink extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <Link {...this.props} activeClassName="active" />
        );
    }
}

export default NavLink;
