const express = require("express")
const cors = require("cors")
const mongooseConnection = require("./config/config")
const urlSchema = require("./models/urlSchema")
require("dotenv").config()

const { v4:uuidv4 } =  require('uuid');

const shortenuuid = () => {
    const str = uuidv4();
    const slicedStr = str.substring(0, 8)
    return slicedStr
}

const PORT = process.env.PORT || 3002
const app = express()
app.use(cors())
app.use(express.json())


app.post("/", async (req,res)=>{
    try {
        let shortUrl

        if(!req.body.additional){
            shortUrl = shortenuuid()
        }

        else{
            shortUrl = `${req.body.additional}/${shortenuuid()}`
        }

        const x = await urlSchema.create({...req.body,shortUrl})
        res.status(200).send(x)

    } 
    
    catch (error) {
        res.status(500).send(`Error creating URL: ${error}`);
    }

})


app.get("/:shortenedUrl",async(req,res)=>{
    const x = await urlSchema.findOne({shortUrl:req.params.shortenedUrl})
    if (!x) return res.status(404)

    res.redirect(x.url)
})


app.listen(PORT,()=>{
    console.log("im listening to port " + PORT)
})


mongooseConnection()