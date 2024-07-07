const mongoose = require('mongoose')

const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tags:{
        type:[],
        required:true
    },
    date:{
        type:Date,
        required:true
    }
}, { versionKey: false })

module.exports= mongoose.model('Article',articleSchema)