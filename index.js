let countEl = document.getElementById('count-el')
let totalMonday = document.getElementById('monday')
/* let totalTuesday = document.getElementById('tuesday')
let totalWednesday = document.getElementById('wednesday')
let totalThursday = document.getElementById('thursday')
let totalFriday = document.getElementById('friday') */
let count = 0

function startCount() {
    count ++
    countEl.innerText = count
}

function save() {
    let countStr = ' ' + count + ' ' + '-'
    totalMonday.innerText += countStr
    countEl.innerText = 0
    count = 0

}

