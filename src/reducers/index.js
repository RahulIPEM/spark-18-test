import * as types from '../constants'

const initialState = {
    isLogin: false,
    loginData: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SELECT_USER + "_FULFILLED":
            state = {
                ...state,
                isLogin: true,
                loginData: action.payload
            };
            break;

        case types.SELECT_USER + "_PENDING":
            state = {
                ...state,
                isLogin: false,
            };
            break;

        case types.SELECT_USER + "_REJECTED":
            state = {
                ...state,
                isLogin: false,
            };
            break;

        default:
            return state;
    }

    return state;
}
