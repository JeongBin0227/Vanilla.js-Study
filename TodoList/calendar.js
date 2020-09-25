const month =document.querySelector('#month');
const year =document.querySelector('#year');
const prev =document.querySelector('#prev');
const next =document.querySelector('#next');
const calendarBody =document.querySelector('#calendar-body');

const date = new Date()

const currentYear = date.getFullYear()
const currentMonth = date.getMonth()
const currentDay = date.getDate()

let changeMonth = currentMonth
let changeYear = currentYear
let monthDay = 0


const monthEng = ['January','Feburary','March','April','May','June','July','August','September','October','November','December']
const weekEng = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
const notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];

month.innerHTML =  `${monthEng[currentMonth]}`
year.innerHTML =  `${currentYear}`
showCalendar(currentYear,currentMonth)

prev.addEventListener('click',()=>{
    if(changeMonth===0){
        changeMonth=11
        changeYear -=1
    }
    else changeMonth -= 1

    // month.innerHTML =  `${monthEng[changeMonth]}`
    // year.innerHTML =  `${changeYear}`
    showCalendar(changeYear,changeMonth)
})

next.addEventListener('click',()=>{
    if(changeMonth===11){
        changeMonth=0
        changeYear +=1
    }
    else changeMonth +=1
    month.innerHTML =  `${monthEng[changeMonth]}`
    year.innerHTML =  `${changeYear}`
    showCalendar(changeYear,changeMonth)
})

function showCalendar(year,month){
    let leap = false
    this.month.innerHTML =  monthEng[month]
    this.year.innerHTML =  year
    if(month===1){
        leap=leapCheck(year)
    }
    let body = ''
    const currentDate = new Date(year,month)
    let firstWeek = true
    let startWeek = currentDate.getDay()%7
    let k = 1

    if(!leap) {
        monthDay = notLeapYear[month]
    }
    else{
        monthDay = leapYear[month]
    }

    while(monthDay+1!==k){
        body += '<tr>'
        if(firstWeek){
            for(let i=0;i<7;i++){
                if(startWeek>i) body += `<td align="center"></td>`
                else{
                    body += `<td id = ${k} onclick="clickDay(this.id)" class="${weekEng[i]}"align="center">${k}</td>`
                    k++
                }
            }
            firstWeek=false
        }
        else{
            for(let i=0;i<7;i++){
                body += `<td id = ${k} onclick="clickDay(this.id)" class="${weekEng[i]}" align="center">${k}</td>`
                k++
                if(k===monthDay+1) break
            }
        }
        body += '</tr>'
    }
    calendarBody.innerHTML = body
}

function leapCheck(year){
    if((year%4===0 && year%100!==0) || year%400===0) return true
    else return false
}

function clickDay(e){
    for(let i = 1; i <=monthDay; i++){
        const day =document.getElementById(`${i}`);

        if(i===Number(e)){
            setTodoListDate(day.id,day.className.replace('toggle',''))
            day.classList.add('toggle')

        }
        else{
            day.classList.remove('toggle')
        }
    }
}

clickDay(currentDay)
