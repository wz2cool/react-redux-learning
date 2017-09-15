import * as React from "react";
import { NavLink } from "../../components";
import { IndexLink } from "react-router";
import * as routePaths from "../../constants/routePaths";
import "./navbar.scss";

class NavBar extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div id="navWrap">
                <div id="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <IndexLink to="/" activeClassName="active" className="home">首页</IndexLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.Housework}>家务</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.Kitchen}>下厨</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.Leisurewear}>家居服</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.Life}>生活</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.InteriorDesign}>软装</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.Sleep}>床品</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.OfficeNTravel}>工作和旅行</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.AllItems}>全部产品</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routePaths.AboutLifeVC}>了解LifeVC</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;
