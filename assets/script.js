// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Hans Nielsen" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons



//Chocolate Chip Cookie

let ccPlusBtn = document.querySelector('#add-cc')
let ccQuant = document.querySelector('#qty-cc')
let totalQuant = document.querySelector('#qty-total')
ccPlusBtn.addEventListener('click', function() {

    cc++
    console.log("cc button click")
    ccQuant.textContent = `${cc}`
    totalQuant.textContent = `${cc}`
})

//Subtract CC

let ccMinusBtn = document.querySelector('#minus-cc')

ccMinusBtn.addEventListener('click', function() { 
    cc--
    ccQuant.textContent = `${cc}`
    console.log('minus button click')
})


// add Sugar Cookie

let sugarPlus = document.querySelector('#add-sugar')
let sugarQuant = document.querySelector('#qty-sugar')

sugarPlus.addEventListener('click', function() {
    sugar++
    sugarQuant.textContent = `${sugar}`
})

// subtract Sugar Cookie
let sugarMinus = document.querySelector('#minus-sugar')

sugarMinus.addEventListener('click', function() {
    sugar--
    sugarQuant.textContent = `${sugar}`
})