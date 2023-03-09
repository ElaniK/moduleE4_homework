//Написать функцию, которая создает пустой объект, но без прототипа.

function createObj(){
    const newObj = Object.create(null)
    return newObj
}

console.log(createObj())