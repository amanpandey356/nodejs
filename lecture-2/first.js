const fs = require('fs')

let a = 10
let b = 20

let sum = a+b
let product = a*b

let data = `Sum: ${sum}\nProduct: ${product}`

fs.writeFile('output.txt', data, (err) => {
  if(err) throw err
  console.log('Date Written in File')
})