const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = process.env.MONGO_URL

mongoose.connect(connectDB)
        .then(()=>console.log('Database Connected...'))
        .catch((err)=>console.log(err))

