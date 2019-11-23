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
    case DELETE_TODO:
      const id = action.payload
      let index = state.todoList.findIndex((o)=>{
        return o.id === id
      })
      if (index !== -1){
          state.todoList.splice(index, 1)
      }
      return {
        ...state
      }
    case TOGGLE_TODO:
      const {todoId, isComplete} = action.payload
      // console.log(todoId)
      // console.log(isComplete)
      let indexTodo = state.todoList.findIndex((o)=>{
        return o.id === todoId
      })
      
      if (indexTodo !== -1){
        state.todoList[indexTodo].isComplete = isComplete
      }
      return {
        ...state
      }
    default:
      return state;
  }
}