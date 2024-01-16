
let number1 = Math.ceil(Math.random() * 100);

console.log(number1);
let gnum = prompt('вставь сюда полученное число : это четное число');

if (gnum == number1) {
console.log('Верно');
} else {
console.log('Не верно, это было число ' + gnum);
}