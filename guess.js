import readline from "readline-sync"

let userGuessedRight = false

// while (true) {
    let NumberChoosen = Math.ceil(Math.random() *10 )
    console.log(NumberChoosen)
    let guess = readline.question("what is your guess")
    console.log(guess)

// }