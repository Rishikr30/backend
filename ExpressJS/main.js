
/*
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Rishi Kumar')
})

app.get('/about', (req, res) => {
    res.send('Computer science student learning backend development')
})

app.get('/contact', (req, res) => {
    res.send('Email\nMobile\nGithub')
})

app.get('/contact/:slug', (req, res) => {
    //logic to fetch {slug} from the db
    console.log(req.params)
    res.send(`hello ${req.params.slug}`)
})

// app.get('/contact/mobile', (req, res) => {
//     res.send('Mobile: 8936099714')
// })
// app.get('/contact/email', (req, res) => {
//     res.send('Email :rishimail3012@gmail.com')
// })

app.get('/projects', (req, res) => {
    res.send('Porfolio Project\nWeather App\nTo-Do App')
})

// app.get('/projects/portfolio', (req, res) => {
//     res.send('Porfolio Project :rishics.netlify.app')
// })
// app.get('/projects/weather', (req, res) => {
//     res.send('Weather App :weather-rishi.netlify.app')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
