import {createStore} from 'redux'

const plusButton =document.getElementById('add');
const minusButton =document.getElementById('minus');
const numberPlace =document.querySelector('h1');

numberPlace.innerHTML = 0

const ADD = "ADD"
const MINUS = "MINUS"

const countModifier = (count = 0,action) => {
    switch (action.type) {
        case ADD:
            return count+1;
            break;
        case MINUS:
            return count-1;
            break;
        default:
            return count
            break;
    }
}

const onChange = () => {
    // console.log('there was a change on the store')
    numberPlace.innerHTML = countStore.getState()
    // console.log()
}


const countStore = createStore(countModifier)

countStore.subscribe(onChange)


plusButton.addEventListener("click",()=>countStore.dispatch({type:ADD}))
minusButton.addEventListener("click",()=>countStore.dispatch({type:MINUS}))

console.log(countStore.getState())

// let number = 0


// const updateText = () => {
//     numberPlace.innerHTML = number
// }

// updateText()


// const handleAdd = () => {
//     number += 1
//     updateText()
// }
// const handleMinus = () => {
//     number -= 1
//     updateText()
// }


// plusButton.addEventListener('click',handleAdd)
// minusButton.addEventListener('click',handleMinus)