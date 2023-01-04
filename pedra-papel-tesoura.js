function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numeroAleatorio = getRndInteger(1, 3);
const jokenpo = process.argv[2]

const pedra = 1
const papel = 2
const tesoura = 3

if(jokenpo === "pedra" && numeroAleatorio == 1) {
    console.log(`Você escolheu pedra e o computador escolheu pedra. Empate! `) 
} else if(jokenpo === "pedra" && numeroAleatorio == 2) {
    console.log("Você escolheu pedra e o computador escolheu papel. Você perdeu!")
} else if(jokenpo === "pedra" && numeroAleatorio == 3) {
    console.log("Você escolheu pedra e o computador escolheu tesoura. Você ganhou!")
}

if(jokenpo === "papel" && numeroAleatorio == 2) {
    console.log(`Você escolheu papel e o computador escolheu papel. Empate! `) 
} else if(jokenpo === "papel" && numeroAleatorio == 1) {
    console.log("Você escolheu papel e o computador escolheu pedra. Você ganhou!")
} else if(jokenpo === "papel" && numeroAleatorio == 3) {
    console.log("Você escolheu papel e o computador escolheu tesoura. Você perdeu!")
}

if(jokenpo === "tesoura" && numeroAleatorio == 3) {
    console.log(`Você escolheu tesoura e o computador escolheu tesoura. Empate! `) 
} else if(jokenpo === "tesoura" && numeroAleatorio == 1) {
    console.log("Você escolheu tesoura e o computador escolheu pedra. Você perdeu!")
} else if(jokenpo === "tesoura" && numeroAleatorio == 2) {
    console.log("Você escolheu tesoura e o computador escolheu papel. Você perdeu!")
}


