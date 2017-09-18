import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";

const userReducer = (state = {}, action) => {
    // 这里就是redux 一个哲学，就是经过reducer 处理过的state 一定要返回一个new state.
    // 每个state 应该都是muable 不可变的
    switch (action.type) {
        case "CHANGE_NAME": {
            state = { ...state, name: action.payload };
            break;
        }
        case "CHANGE_AGE": {
            state = { ...state, age: action.payload };
            break;
        }

    }
    return state;
};

const tweetsReducer = (state = [], action) => {
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer,
});

// init state currently 0
// 我们可以初始化state在 创建store 的时候，
// 但是更好的方法去初始化state 应该是在每个reducer 自己的state 上面。
const store = createStore(reducers);

store.subscribe(() => {
    console.log("store changed", store.getState());
})

store.dispatch({ type: "CHANGE_NAME", payload: "Will" });
store.dispatch({ type: "CHANGE_AGE", payload: 35 });
store.dispatch({ type: "CHANGE_AGE", payload: 36 });
registerServiceWorker();

// 多个 Reducers (reducer 我觉得有点像service， handle actions)
// 流程是这样的
// 1 创建store 绑定reducer， 并初始化第一个state 是 0
// 2. disptach 一个action 改变
// 3. reducer 返回一个新的状态
// 4. 这里我们绑定了多个reducer， 这个说明，我们state 对象是个复杂对象，
// 比如这里的对象我们有两个值一个是 user， 另外一个是 tweets
// 这里的userReducer 在combineReducers 里面的属性同样是 user 对应state 里面的 user，