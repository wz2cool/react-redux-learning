import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // 能够让日志更加美观
import thunk from "redux-thunk"; // 处理aync 异步
import axios from "axios";

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_START": {
            return { ...state, fetching: true };
            break;
        }
        case "FETCH_USERS_ERROR": {
            return { ...state, fetching: false, error: action.payload };
            break;
        }
        case "RECEIVE_USERS": {
            return { ...state, fetching: false, fetched: true, users: action.payload };
            break;
        }
    }
    return state;
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

// 但引用了thunk 插件，我们就可以自定义一个异步dipatch 接受state， 否则这边只能传入一个常量state的
store.dispatch((dispatch) => {
    // fetch user action.
    dispatch({ type: "FETCH_USERS_START" });
    axios.get("http://rest.learncode.academy/api/wstern/users")
        .then((response) => {
            dispatch({ type: "RECEIVE_USERS", payload: response.data });
        })
        .catch((err) => {
            dispatch({ type: "FETCH_USERS_ERROR", payload: err });
        })
});

registerServiceWorker();
