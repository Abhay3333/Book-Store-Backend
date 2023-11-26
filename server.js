const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
require('./config/db.js')
dotenv.config()
const BookRoutes = require('./Routes/Books.js')
const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT

app.use('/api/v1/book',BookRoutes)

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})