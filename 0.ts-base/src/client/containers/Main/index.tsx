import * as React from "react";
import TopBar from "../TopBar";
import NavBar from "../NavBar";
import Header from "../Header";

class App extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <TopBar />
                <Header />
                <NavBar />
                 <div>{this.props.children}</div>
            </div>);
    }
}

export default App;
