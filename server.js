//servidor


const express = require('express')
const path = require('path')

let app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'src')))

const puerto = 3000

app.listen(3000, () => {
    console.log(`Server is running on port 3000 http://localhost:${puerto} `);
}
);