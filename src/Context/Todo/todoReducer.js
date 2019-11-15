import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    EDIT_TODO
} from '../types'

export default (state, action) => {
    switch(action.type){
        case SEARCH_USERS:
            return{
                ...state, // return the current state
                users: action.payload,
                loading: false
            }
        case ADD_TODO:
            return{
                ...state,
            }
        default:
            return state;
    }
}