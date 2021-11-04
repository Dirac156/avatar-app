import { UserActionTypes } from "./user.types";
import { delteUserInArray } from './user.action';

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: null,
    like: [],
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.GET_USERS:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        case UserActionTypes.GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UserActionTypes.DELETE_USER:
            const users = delteUserInArray(state.users, action.payload);
            console.log('users', users)
            console.log(state.users)
            return {
                ...state,
                users: users
            }
        default:
            return state
    }
}

export default userReducer;
