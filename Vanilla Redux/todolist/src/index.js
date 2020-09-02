import {createStore} from 'redux'
import { useLayoutEffect } from 'react';

const plusButton =document.getElementById('add');
const todoInput =document.getElementById('todo');
const todoLists =document.getElementById('todoList');
const form =document.querySelector('form')


const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const intialState = []

const reducerModifier = (state = intialState,action) => {
    switch (action.type) {
        case ADD_TODO:
          return [{text:action.todo, id:Date.now()},...state]
          break;
        case DELETE_TODO:
          return state.filter(todo=>todo.id!=action.id)
          break;
        default:
          return state
          break;
    }
}

const store = createStore(reducerModifier)

function paintToDos(){
  const toDos = store.getState()
  todoLists.innerHTML=''
  toDos.forEach(toDo => {
    createToDo(toDo) 
  })
}

store.subscribe(paintToDos)

const createToDo = todo => {
  const li = document.createElement('li')
  li.id = todo.id
  li.innerHTML=todo.text

  const button = document.createElement('button')
  button.innerHTML = '삭제'
  button.addEventListener("click",dispatchdeleteToDo)
  li.appendChild(button)

  todoLists.appendChild(li)
}


const dispatchAddToDo = text =>{
  store.dispatch(addTodo(text))
}

const dispatchdeleteToDo = e =>{
  const id = e.target.parentNode.id
  store.dispatch(deleteTodo(id))
}

const addTodo = text => {
  store.dispatch({type:ADD_TODO,todo:text})
}
const deleteTodo = e => {
  const id = e.target.parentNode.id
  store.dispatch({type:DELETE_TODO,id:id})
}

const onSubmit = e => {
  e.preventDefault()
  dispatchAddToDo(todoInput.value)
  todoInput.value=''
}

form.addEventListener("submit",onSubmit)

