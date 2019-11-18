import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO
} from '../types'

export default (state, action) => {
  switch(action.type){
    case ADD_TODO:
      const list = state.todoList.concat(action.payload)
      return {
        ...state,
        todoList: list
      }
    default:
      return state;
  }
}