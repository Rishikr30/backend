import fs from "fs/promises"

let a = await fs.readFile("rishi.txt")

let b = await fs.appendFile("rishi.txt","\n\n\n\n\nthis is amzing promise")
console.log(a.toString())