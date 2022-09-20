const fs= require('fs');
fs.writeFile('welcome.txt', 'Hello Node', function(err) {
    if (err) {
       return console.error(err);
    }
    
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    
    fs.readFile('welcome.txt', function (err, data) {
       if (err) {
          return console.error(err);
       }
       console.log("Asynchronous read: " + data.toString());
    });
 });