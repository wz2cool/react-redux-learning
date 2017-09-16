import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from "redux";

// return new state
const reducer = function (initialState = 0, action) {
    if (action.type === "INC") {
        return initialState + action.payload;
    } else if (action.type === "DEC") {
        return initialState - action.payload;
    } else if (action.type === "E") {
        throw new Error("AAA!!!")
    }
    return initialState;
}

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
}

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log("Ops!", e);
    }
}

const middleware = applyMiddleware(logger, error);

// init state currently 0
const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
    console.log("store change", store.getState);
})

store.dispatch({ type: "INC", payload: 1 })
store.dispatch({ type: "INC", payload: 2 })
store.dispatch({ type: "INC", payload: 22 })
store.dispatch({ type: "INC", payload: 1 })
store.dispatch({ type: "DEC", payload: 1000 })
store.dispatch({ type: "E" })
registerServiceWorker();

// 流程是这样的
// 1 创建store 绑定reducer， 并初始化第一个state 是 0
// 2. disptach 一个action 改变
// 3. reducer 返回一个新的状态
// 4. 这里middleware 需要next 才会出发state 改变， 这里有点像aop 切片
// 注意，中间件每个都会走一遍的. 所以其实这个error 中间件只是做demo 用的
// 可以即使错误也可以放到logger中间件中去。