const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    id : {type : String, required:true, unique:true  },
    name : {type : String, required:true, unique : true},
    company : { type : String , required : true },
    price : {type : Number, required:true},
    colors :{type:Array},
    image : {type : String, required:true},
    description:{type : String, required:true},
    shipping : {type:String},
    category:{type : Array},
    featured:{
        type : Boolean,
        default : false,
        },
    },
   

{timestamps : true}
);

module.exports = mongoose.model("Product", ProductSchema);