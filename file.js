//reading files
const fs = require('fs')

fs.readFile('./doc/blog.txt', (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data.toString())

});
console.log('last time')
//writing files

fs.writeFile('.doc/blog1.txt', 'hello, world', ()=> {
    console.log('file was written')
})