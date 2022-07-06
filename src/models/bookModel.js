let mongoose=require("mongoose")
let objectId=mongoose.Schema.Types.ObjectId
let bookSchema=new mongoose.schema({
    title: {type:String, required:true, unique:true},
    excerpt: {type:String, required:true}, 
    userId: {type:objectId, required:true, ref:'User'},
    ISBN: {type:String, required:true, unique:true},
    category: {type:String, required:true},
    subcategory:{type:[String] ,required:true},
    reviews: {type:Number, default: 0},
    deletedAt: {type:Date}, 
    isDeleted: {boolean, default: false},
    releasedAt: {type:Date, required:true},   
     } ,
{timestamps:true}  )
module.exports = mongoose.model('Book', bookSchema)