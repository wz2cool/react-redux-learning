const initialState = {
    fetching: false,
    fetched: false,
    tweets: [],
    error: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_TWEETS": {
            return { ...state, fetching: true };
        }
        case "FETCH_TWEETS_REJECTED": {
            return { ...state, fetching: false, error: action.payload };
        }
        case "FETCH_TWEETS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                tweets: action.payload,
            }
        }
    }
    return state;
}