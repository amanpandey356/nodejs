const fs = require('fs')

console.log("1.Starts The Script")

// Synchronous (blocking) operation
console.log("2.Reading File Synchrnoulsy")
const dataSync = fs.readFileSync('user-detail.txt', 'utf8')
console.log('3.synchronous read complete')

// Asynchronous (non-blocking) operation
console.log('4.Reading File Asynchrnoulsy')
fs.readFileSync('user-deatil.txt', 'utf8', (err, dataAsync) => {
  if(err) throw err
  console.log("6.Asynchrnous Read Complete")
})

console.log('5.End Of script')
