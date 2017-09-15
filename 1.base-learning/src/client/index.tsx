// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import * as ReactRouter from "react-router";
// import { AppContainer } from "react-hot-loader";
// import "./index.scss";


// declare var module: {
//     hot: {
//         accept: (path: string, change: () => void) => void,
//     },
// };

// ReactDOM.render(
//     <AppContainer>
//         <AppRouter />
//     </AppContainer>,
//     document.getElementById("example"));

// if (module.hot) {
//     module.hot.accept("./containers/AppRouter", () => {
//         const NextAppRouter = require("./containers/AppRouter").default;
//         ReactDOM.render(
//             <AppContainer>
//                 <NextAppRouter />
//             </AppContainer>,
//             document.getElementById("example"));
//     });
// }
import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/app";
