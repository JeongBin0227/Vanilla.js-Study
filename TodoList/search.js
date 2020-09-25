const autoCompleteInput =document.querySelector('.autoComplete_input');
const autoComplete =document.querySelector('.autoComplete_result');

const creatWord = (todo,date) => {
    const li = document.createElement('li')

    const year = date.slice(0,4)
    const month = date.slice(4,5)
    const day = date.slice(6,7)
    
    console.log(date)
    console.log(year)
    console.log(month)
    console.log(day)

    li.classList.add('autoComplete_result_item')
    li.innerHTML=todo
    li.innerHTML += ' : ' + year + '년 ' + month + '월 ' + day + '일'
    autoComplete.appendChild(li)
  }
const searthWord = (word) => {
    // console.log(todos)
    let count = 0
    autoCompleteClear()
    autoCompleteNotVisible()
    for(day in todos){
        for(todo in todos[day]){
            if(todo.includes(word)){
                creatWord(todo,day)
                count++
            }
        }
    }
    if(count!==0)autoCompleteVisible()
    
}

const doByInputKeyUp= (e) => {
    autoCompleteNotVisible()
    if(e.target.value.length!==0) searthWord(e.target.value)
}


const autoCompleteClear = () =>{
    autoComplete.innerHTML = '';
    autoComplete.style.display = 'block';
}

const autoCompleteVisible = () =>{
    autoComplete.style.display = 'block';
}

const autoCompleteNotVisible = () =>{
    autoComplete.style.display = 'none';
}

const clickTodoResult = e => {
    console.log(e.target.innerHTML)
}
autoCompleteInput.addEventListener('keyup', e => doByInputKeyUp(e));
autoComplete.addEventListener('click',clickTodoResult)
// console.log('a',createWord('강의'))

