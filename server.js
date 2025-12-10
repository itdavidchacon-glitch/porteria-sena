//servidor


const express = require('express')
const path = require('path')

let app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'src')))
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/acciones', express.static(path.join(__dirname, 'acciones')))
app.use('/img', express.static(path.join(__dirname, 'img')))

const puerto = 3000

app.listen(3000, () => {
    console.log(`Server is running on port 3000 http://localhost:3000`);
})
