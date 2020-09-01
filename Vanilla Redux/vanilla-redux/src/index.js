import {createStore} from 'redux'

const plusButton =document.getElementById('add');
const minusButton =document.getElementById('minus');
const numberPlace =document.querySelector('h1');

const countModifier = (count = 0,action) => {
    if(action.type==="ADD"){
        return count+1;
    }
    else if(action.type==="MINUS"){
        return count-1;
    }
    return count
}

const onChange = () => {
    // console.log('there was a change on the store')
    numberPlace.innerHTML = countStore.getState()
    // console.log()
}


const countStore = createStore(countModifier)

countStore.subscribe(onChange)


plusButton.addEventListener("click",()=>countStore.dispatch({type:"ADD"}))
minusButton.addEventListener("click",()=>countStore.dispatch({type:"MINUS"}))

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