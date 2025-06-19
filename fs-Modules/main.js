const fs = require("fs");
console.log(fs);


console.log("starting");
fs.writeFile("rishi2.txt", "Rishi is a good student with sharp mindset", ()=>{
    console.log("Done");
    fs.readFile("rishi2.txt", (error, data) =>{
        console.log(error, data.toString())
    })
});
console.log("Ending")