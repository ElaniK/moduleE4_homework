//Написать функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

const myObj = {
    text: 'Hello',
    numb: 2,
}

const a = 'numb'
const b = 5

function SomFun(c, myObj){
    return c in myObj
}

console.log(somFun(a, myObj))
console.log(somFun(b, myObj))

