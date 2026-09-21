console.log(Math.trunc(12.5))
console.log(Math.floor(12.8))//
console.log(Math.floor(12.2))//
console.log(Math.ceil(12.6))
console.log(Math.ceil(12.1))
console.log(Math.random())
console.log(Math.round(4.1))
console.log(Math.round(4.7))
console.log(Math.pow(12,5))
console.log(Math.sqrt(144))

const moment = require('moment');

const currentDate = moment().format('DD-MMM-YYYY')

console.log(currentDate)

const date = moment().add(3, 'years').format('DD-MM-YYYY')
// const date = moment().add(3, 'days').format('DD-MM-YYYY')
// const date = moment().add(3, 'months').format('DD-MM-YYYY')

console.log(date)

//.fill(date) use like this in real time projects