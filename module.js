const file = require('./people');
const { people,ages } = require('./people')

console.log(file.people, file.ages)
console.log(people, ages)

const os = require('os');

console.log(os.platform(), os.homedir())
