import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";

// return new state
const reducer = function (state, action) {
    if (action.type === "INC") {
        return state + action.payload;
    }
    if (action.type === "DEC") {
        return state - action.payload;
    }
    return state;
}

// init state currently 0
const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("store changed", store.getState());
})

store.dispatch({ type: "INC", payload: 1 })
store.dispatch({ type: "INC", payload: 2 })
store.dispatch({ type: "INC", payload: 22 })
store.dispatch({ type: "INC", payload: 1 })
store.dispatch({ type: "DEC", payload: 1000 })
registerServiceWorker();

// 流程是这样的
// 1 创建store 绑定reducer， 并初始化第一个state 是 0
// 2. disptach 一个action 改变
// 3. reducer 返回一个新的状态