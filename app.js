const chalk = require('chalk')
const getNotes = require('./notes.js')


// const msg = getNotes()
// console.log(msg)
// console.log(chalk.white.bgRed.bold('Success'))

const command = process.argv[2]
console.log(process.argv)

if (command === 'add') {
    console.log('Adding Notes...')
}else if (command === 'remove') {
    console.log('Removing Notes...')
}