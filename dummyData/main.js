const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/employee")


mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set("view engine", "ejs");

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    //clear the collection Employee 
    await Employee.deleteMany({})

    //generate randome data
    let randomNames = ["Rishi", "Rahul", "Rohit", "Amit", "Vivek"]
    let randomLang = ["Python", "javaScript", "Java", "C++", "C"]
    let randomCity = ["Muzaffarpur", "Patna", "Delhi", "Mumbai", "Kolkatta"]

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 220000),
            language: getRandom(randomLang),
            city: getRandom(randomCity),
            isManager: (Math.random() > 0.5) ? true : false
        })
        // await e.save()
        console.log(e);

    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
