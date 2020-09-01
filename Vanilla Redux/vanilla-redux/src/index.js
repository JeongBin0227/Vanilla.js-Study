import {createStore} from 'redux'

const plusButton =document.getElementById('add');
const minusButton =document.getElementById('minus');
const numberPlace =document.querySelector('h1');

const countModifier = (count = 0) => {
    return count
}

const countStore = createStore(countModifier)

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