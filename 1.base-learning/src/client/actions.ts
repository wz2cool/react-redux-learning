import { createAction, Action } from "redux-actions";
import { assign } from "lodash";
import { ITodo } from "./model";

import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETED,
} from "./constants/ActionTypes";

export const addTodo = createAction<ITodo, string>(
    ADD_TODO,
    (text: string) => ({ text, completed: false }),
);

export const deleteTodo = createAction<ITodo, ITodo>(
    DELETE_TODO,
    (todo: ITodo) => todo,
);

export const editTodo = createAction<ITodo, ITodo, string>(
    EDIT_TODO,
    // 后面吧前面覆盖掉， text: newText 覆盖 todo
    (todo: ITodo, newText: string) => assign(todo, { text: newText }),
);

export const completeTodo = createAction<ITodo, ITodo>(
    COMPLETE_TODO,
    (todo: ITodo) => todo,
);

export const completeAll = createAction<void>(
    COMPLETE_ALL,
    () => { /*do nothing*/ },
);

export const clearCompleted = createAction<void>(
    CLEAR_COMPLETED,
    () => { /*do nothing*/ },
);
