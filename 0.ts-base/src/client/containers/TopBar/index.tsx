import * as React from "react";
import { Link } from "react-router";
import "./top-bar.scss";

class TopBar extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div id="top-bar">
                <div className="wrap">
                    <p className="tel">
                        LifeVC service for China: 400 609 2288
                    </p>
                    <ul id="top-user-center" className="quick-menu">
                        <li>
                            <a href="#">[注册有惊喜]</a>
                        </li>
                        <li>
                            <Link to="/Login">[登录]</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopBar;
