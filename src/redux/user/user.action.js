import axios from 'axios';
import { UserActionTypes } from "./user.types";

export const getUsers = () => {
    return (dispatch) => {
        dispatch({ type: UserActionTypes.GET_USERS })

        return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(  
            user => dispatch({ type: UserActionTypes.GET_USERS_SUCCESS, payload: user.data }))
        .catch(
            err => dispatch({ type: UserActionTypes.GET_USERS_FAILURE, payload: err })
        );
    };
};

export const delteUserInArray = ( users, userId ) => {
    const userList = [];
    for ( let i = 0; i < users.length; i++ ) {
        if (Number(users[i].id) === Number(userId)) { }
        else { userList.push(users[i]) };
    }
    return userList;
}


export const deleteUser = (userId) => ({
    type: UserActionTypes.DELETE_USER,
    payload: userId
});
