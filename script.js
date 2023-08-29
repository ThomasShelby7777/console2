let result = confirm('Задание 1')


let a = +prompt('Введите число')    // 5
let b = +prompt('Введите степень')  // 3
let c = 1

for (let i = 0; i < b; i++){
    c = c * a
}
alert(c)



let results = confirm('Задание 2')

var steps = +prompt('Введите число ступенек');
var indentsymbol = prompt('Введите символ отступа');
var finalsymbol = prompt('Введите конечный символ');



for (let i = 0; i < steps; i++) {
  let indentsymbol = ''
  for(let j = 0; j < i; j++) {
    indentsymbol += '-'
  }
  console.log(indentsymbol + finalsymbol)
}