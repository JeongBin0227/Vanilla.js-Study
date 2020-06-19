// 버튼 추가
function addBtn(){
    const li = document.createElement("li")
  const delBtn = document.createElement("button")
  delBtn.innerText = "X"
  delBtn.addEventListener("click",deleteToDo)

  const span  = document.createElement("span")
  const newId = toDos.length +1;
  span.innerText=text
  li.append(span);
  li.append(delBtn);
  li.id = newId

  toDoList.appendChild(li)

}


//인풋 태그 만들기
const toDoForm = document.querySelector('.js-toDoForm')
toDoForm.addEventListener("submit",handleSubmit)

function handleSubmit(event) {
    toDoInput = toDoForm.querySelector('input'),
    event.preventDefault()
    const currentValue = toDoInput.value
    paintToDo(currentValue)
    toDoInput.value=""
}

// 로컬 스커리지에 저장

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
  }

// 로컬 스터리지에 가져오기
const parsedToDos = JSON.parse(loadedToDos)

//삭제 로직
function deleteToDo(event) {
    const btn = event.target
    const li = btn.parentNode
    toDoList.removeChild(li)
  
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id))
    saveToDos();
  
  }

//랜덤 넘버 생성
  Math.floor(Math.random() * IMG_NUMBER)