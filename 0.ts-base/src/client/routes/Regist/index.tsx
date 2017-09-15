import * as React from "react";

interface IRegisterProps { };

interface IRegisterState { };

class Register extends React.Component<IRegisterProps, IRegisterState> {
    public render(): JSX.Element {
        return (
            <div>
                <form>
                    <div><input type="text" placeholder="姓名" /></div>
                    <div><input type="password" placeholder="密码" /></div>
                </form>

            </div>
        );
    }
}

export default Register;
