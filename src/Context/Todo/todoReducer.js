import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO
} from '../types'

export default (state, action) => {
  switch(action.type){
<<<<<<< HEAD
    case ADD_TODO:{
=======
    case ADD_TODO:
>>>>>>> createTodo
      const list = state.todoList.concat(action.payload)
      return {
        ...state,
        todoList: list
<<<<<<< HEAD
      }}
    case DELETE_TODO:{
      const id = action.payload
      let index = state.todoList.findIndex((o)=>{
        return o.id === id
      })
      if (index !== -1){
          state.todoList.splice(index, 1)
      }
      return {
        ...state
      }}
    case TOGGLE_TODO:{
      const {id, isComplete} = action.payload
      let index = state.todoList.findIndex((o)=>{
        return o.id === id
      })
      
      if (index !== -1){
        state.todoList[index].isComplete = isComplete
      }
      return {
        ...state
      }}
=======
      }
>>>>>>> createTodo
    default:
      return state;
  }
}