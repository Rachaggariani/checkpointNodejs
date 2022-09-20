const fs= require('fs');
const generator = require('generate-password');

const password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password);
fs.writeFile('password-generator',password,(err)=>{
    if (err) {
        return console.error(err);
     }
     console.log("Data written successfully!");
})