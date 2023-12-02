const mongoose = require("mongoose")
require("dotenv").config()

const base = "mongodb+srv://"
const username = process.env.MONGO_USER
const password = process.env.MONGO_PS
const host = process.env.MONGO_HOST
const database = process.env.MONGO_DATABASE
const connection = `${base}${username}:${password}@${host}/${database}`

const establishConnection = async () =>{

    try {
        await mongoose.connect(connection,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("connection established")
    } catch (error) {
        console.error(error)
    }

}

module.exports = establishConnection