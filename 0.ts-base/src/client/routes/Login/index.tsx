import * as React from "react";

interface ILoginProps { };

interface ILoginState { };

class Login extends React.Component<ILoginProps, ILoginState> {
    public render(): JSX.Element {
        return (
            <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>

            </div>
        );
    }
}

export default Login;
