import {createStore} from 'redux'
import { useLayoutEffect } from 'react';

const plusButton =document.getElementById('add');
const todoInput =document.getElementById('todo');
const todoLists =document.getElementById('todoList');
const form =document.querySelector('form')


const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

//리듀서 디스패치
const addTodo = text => {
  store.dispatch({type:ADD_TODO,todo:text})
}
const deleteTodo = id => {
  store.dispatch({type:DELETE_TODO,id:id})
}

const intialState = []

const reducer = (state = intialState,action) => {
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

const store = createStore(reducer)

//그리기
function paintToDos(){
  const toDos = store.getState()
  todoLists.innerHTML=''
  toDos.forEach(toDo => {
    createToDo(toDo) 
  })
}

//변화가 있을때 마다 그리기
store.subscribe(paintToDos)

//todo 생성
const createToDo = todo => {
  const li = document.createElement('li')
  li.id = todo.id
  li.innerHTML=todo.text

  //todo 삭제
  const button = document.createElement('button')
  button.innerHTML = '삭제'
  button.addEventListener("click",dispatchdeleteToDo)
  li.appendChild(button)

  todoLists.appendChild(li)
}

//디스패치 연결
const dispatchAddToDo = text =>{
  store.dispatch(addTodo(text))
}

const dispatchdeleteToDo = e =>{
  const id = e.target.parentNode.id
  store.dispatch(deleteTodo(id))
}

//투두리스트 추가 눌렀을 때
const onSubmit = e => {
  e.preventDefault()
  dispatchAddToDo(todoInput.value)
  todoInput.value=''
}

form.addEventListener("submit",onSubmit)

