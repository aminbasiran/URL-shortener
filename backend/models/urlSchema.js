const mongoose = require("mongoose")

const urlSchema = mongoose.Schema(
    {
        url:{type:String,required:true},
        shortUrl:{type:String,required:true}
    },
    {timestamps:true}
)

module.exports = mongoose.model("url",urlSchema)