use("CrudDB")

db.createCollection("courses")

db.courses.insertOne({
    name: "Rishi web dev course",
    price: 1999,
    instructor: "Rishi Kumar",
    about: "This is a best course for begginer to learn web development from scratch",
    assigments: 15,
    projects: 20

})

db.courses.insertMany(
    [
    {
        "name": "Rishi Web Dev Course",
        "price": 1999,
        "instructor": "Rishi Kumar",
        "about": "This is the best course for beginners to learn web development from scratch.",
        "assignments": 15,
        "projects": 20
    },
    {
        "name": "JavaScript Mastery Bootcamp",
        "price": 1499,
        "instructor": "Rishi Kumar",
        "about": "Master JavaScript with real-world projects and interactive lessons.",
        "assignments": 10,
        "projects": 12
    },
    {
        "name": "Frontend with HTML & CSS",
        "price": 999,
        "instructor": "Rishi Kumar",
        "about": "Learn how to create beautiful websites using HTML5 and CSS3.",
        "assignments": 8,
        "projects": 5
    },
    {
        "name": "React.js Complete Guide",
        "price": 2499,
        "instructor": "Rishi Kumar",
        "about": "Become a React pro and build dynamic front-end applications.",
        "assignments": 12,
        "projects": 10
    },
    {
        "name": "Full Stack Web Development",
        "price": 2999,
        "instructor": "Rishi Kumar",
        "about": "Learn frontend and backend development with projects and deployment.",
        "assignments": 18,
        "projects": 22
    },
    {
        "name": "Responsive Web Design",
        "price": 1099,
        "instructor": "Rishi Kumar",
        "about": "Make websites look great on all devices using responsive design techniques.",
        "assignments": 6,
        "projects": 7
    },
    {
        "name": "Backend with Node.js & Express",
        "price": 1999,
        "instructor": "Rishi Kumar",
        "about": "Build scalable backend APIs using Node.js and Express.",
        "assignments": 10,
        "projects": 9
    },
    {
        "name": "MongoDB for Beginners",
        "price": 1199,
        "instructor": "Rishi Kumar",
        "about": "Understand how NoSQL databases work with MongoDB.",
        "assignments": 7,
        "projects": 6
    },
    {
        "name": "Git & GitHub Essentials",
        "price": 499,
        "instructor": "Rishi Kumar",
        "about": "Learn version control and collaboration with Git and GitHub.",
        "assignments": 4,
        "projects": 3
    },
    {
        "name": "Portfolio Website Workshop",
        "price": 799,
        "instructor": "Rishi Kumar",
        "about": "Create and deploy your personal portfolio website.",
        "assignments": 5,
        "projects": 1
    }
]
)


// let a = db.courses.find({ price: 1999 })
// console.log(a)


// let b = db.courses.findOne()
// console.log(b);


// let c = db.courses.updateOne({instructor: "Rishi Kumar"}, {$set:{instructor: "Rishi Jaiswal"}})


// let c1 = db.courses.updateMany({instructor: "Rishi Kumar"}, {$set:{instructor: "Rishi Jaiswal"}})
// console.log(c1);


// db.courses.deleteOne({assigments: 15})