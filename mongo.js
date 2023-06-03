const mongoose=require("mongoose")

//mongodb+srv://sushanthkulkarni262:sushanth@cluster0.gcbl8bu.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://sushanthkulkarni262:sushanth@cluster0.gcbl8bu.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true, useUnifiedTopology:true
})
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log(err);
})


const loginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required: true
    }
})

const homeSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required: false
    },
    dob:{
        type:String,
        required: false
    },
    gender:{
        type:String,
        required: true
    },
    pno:{
        type:String,
        required: false
    }
})

const logSig = mongoose.model("logSig",loginSchema)
const home = mongoose.model("home",homeSchema)

module.exports={logSig, home}
