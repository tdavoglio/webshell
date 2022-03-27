const http = require("http")
const { Console } = require("console")
const fs = require("fs")
const path = require("path")

http.createServer((req, res) => {

    var filename = __dirname + "/index.html"
    
    fs.readFile(filename, function(err, data){
        console.log(filename)
        response.end(data)    
    });
    

}).listen(3000, () => { 
    console.log(`Server running at http://localhost:3000`)
})