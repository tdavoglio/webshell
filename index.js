const fs = require("fs")

function index() {
    var htmlFile = fs.readFile("./index.html");
    return htmlFile
}