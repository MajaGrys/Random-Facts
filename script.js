function handleDogs() {
    fetch('https://dog-api.kinduff.com/api/facts?number=1')
    .then(res => res.json())
    .then(data => document.getElementById('fact').textContent = data.facts)}

function handleCats() {
    fetch('https://meowfacts.herokuapp.com/')
    .then(res => res.json())
    .then(data => document.getElementById('fact').textContent = data.data)}

function handleNumbers() {
    fetch('https://numbersapi.com/random/trivia?json')
    .then(res => res.json())
    .then(data => document.getElementById('fact').textContent = data.text)}

function handleOther() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(res => res.json())
    .then(data => document.getElementById('fact').textContent = data.text)}