import * as React from "react";
import "./header.scss";

class Header extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div id="header">
                <h1 id="logo">
                    <a className="logo i-global" href="#" title="LifeVC陪你生活一辈子">
                        LifeVC丽芙家居
                    </a>
                </h1>
            </div>
        );
    }
}

export default Header;
