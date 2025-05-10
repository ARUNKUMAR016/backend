const mongoose=require("mongoose");


const adminSchema=mongoose.Schema({
    title:{
        type:String,

    },
    about:{
        type:String,
    },
    genre:{
        type:String,
    },
    movieUrl:{
        type:String,
    }
     
},{
    timestamps:true
});


const Admin=mongoose.model("Admin",adminSchema);

module.exports={
    Admin,
}