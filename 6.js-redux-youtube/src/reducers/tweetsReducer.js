const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_USERS_START": {
            return { ...state, fetching: true };
        }
        case "FETCH_USERS_ERROR": {
            return { ...state, fetching: false, error: action.payload };
        }
        case "RECEIVE_USERS": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload,
            };
        }
    }
    return state;
}