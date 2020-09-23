const selectWeek =document.querySelector('.select-week');
const selectDay =document.querySelector('.select-day');
let todoCount = 3
let currentTodo = 2

function setTodoListDate(day,week){
    selectWeek.innerHTML = day
    selectDay.innerHTML = week
    currentTodo = year.innerHTML+(changeMonth+1)+selectWeek.innerHTML
    console.log(currentTodo)
    paintToDos()
}

// const plusButton =document.getElementById('add');
const todoInput =document.getElementById('todo-input');
const todoLists =document.getElementById('todo-list');
const form =document.querySelector('form')


// posts : {
//   byId : {
//       "post1" : {
//           id : "post1",
//           author : "user1",
//           body : "......",
//           comments : ["comment1", "comment2"]
//       },
//       "post2" : {
//           id : "post2",
//           author : "user2",
//           body : "......",
//           comments : ["comment3", "comment4", "comment5"]
//       }
//   },
//   allIds : ["post1", "post2"]
// },

let todos = {
    2020915:{
      '강의듣기':{
        id:1,
        isDone:false,
      },
      '과제하기':{
        id:2,
        isDone:false,
      }
    }
  }



const reducer = (action) => {
    let tmp = {}
    switch (action[0]) {
        case 'ADD_TODO':
          for(loopdate in todos){
            if(loopdate===currentTodo) tmp = todos[loopdate]
          }
          if(Object.keys(tmp).length===0) {
            todos[currentTodo] = {}
            todos[currentTodo][`${action[1]}` ] =  {}
            todos[currentTodo][`${action[1]}`]['id'] = todoCount
            todos[currentTodo][`${action[1]}`]['isDone'] = false
          }
          else{
            todos[currentTodo][`${action[1]}` ] =  {}
            todos[currentTodo][`${action[1]}`]['id'] = todoCount
            todos[currentTodo][`${action[1]}`]['isDone'] = false
          }
          todoCount++
          paintToDos()
          break;
        case 'DELETE_TODO':
          for(key in todos){
            let tmpTodo = {}
            tmpTodo[key]={}
            for(todo in todos[key]){
              if((todos[key][todo]['id']!==Number(action[1]))){
                tmpTodo[key][todo]={}
                tmpTodo[key][todo] = todos[key][todo]
              }
            }
            todos[key]=tmpTodo[key]
          }
          paintToDos()
          break;
        default:
          break;
    }
}
//그리기
function paintToDos(){
  todoLists.innerHTML=''
  if(todos[currentTodo]!==undefined) {
    for( todo in todos[currentTodo]){
        createToDo(todo,todos[currentTodo][todo].id)
    }
  }

}

//todo 생성
const createToDo = (todo,id) => {
  const li = document.createElement('li')
  li.id = id
  li.innerHTML=todo

  //todo 삭제
  const button = document.createElement('button')
  button.innerHTML = '삭제'
  button.classList.add('delete')
  button.addEventListener("click",function(){
    reducer(['DELETE_TODO',this.parentElement.id])
  })
  li.appendChild(button)

  todoLists.appendChild(li)
}


//투두리스트 추가 눌렀을 때
const onSubmit = e => {
  e.preventDefault()
  let currentId = ''
  currentId = year.innerHTML+(changeMonth+1)+selectWeek.innerHTML

  currentTodo = currentId
  reducer(['ADD_TODO',todoInput.value,currentId])
  todoInput.value=''
}

form.addEventListener("submit",onSubmit)

