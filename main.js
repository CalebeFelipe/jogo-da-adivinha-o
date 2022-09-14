//Variáveis
const buttonTry = document.querySelector("#btnTry");
const buttonReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const h2 = document.querySelector(".screen2 h2")
let randomNumber = Math.round(Math.random() * 10)  
let xAttempts = 1

//Funções
const handleTryClick = (event) => { 
    event.preventDefault()

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        h2.innerText = `Acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++
}

const handleResetClick = () => {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

const toggleScreen = () => {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

const keydownEnter = (e) => {
    if(e.key == 'Enter') {
        handleResetClick()
    }
}

//Eventos
buttonTry.addEventListener('click', handleTryClick)
buttonReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keydownEnter)

