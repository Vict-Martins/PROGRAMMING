// let e const 
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)


// Template String

const produto = 'ipad'
console.log(`${produto} é caro `)


// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l)
console.log(e)
console.log(tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome: n} = {nome: 'Ana', idade: 9}
console.log(i, n)