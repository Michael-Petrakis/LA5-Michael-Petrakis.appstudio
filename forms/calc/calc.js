function calculate(n1, n2) {
  let answerFunction = n1+n2
  return answerFunction
}

let number1 = Number(prompt("Enter an integer"))
let number2 = Number(prompt("Enter an integer"))


let summedNumbers = calculate(number1, number2)

console.log(`The sum of ${number1} and ${number2} is ${summedNumbers}`)