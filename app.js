const express = require("express")
const {logSig, home} = require("./mongo.js")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password, name}=req.body

    try{
        const check=await logSig.findOne({email:email, password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password, name}=req.body

    const data={
        email:email,
        password:password,
        name:name
    }

    try{
        const check=await logSig.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await logSig.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/home",async(req,res)=>{
    const{email,age,dob,gender,pno}=req.body
    //alert("1.1")
    const data={
        email:email,
        age:age,
        dob:dob,
        gender:gender,
        pno:pno
    }

    try{
        await home.insertMany([data])
        res.json("updated")
        //alert("entered app.js home part")
    }
    catch(e){
        res.json("fail")
    }

})


app.listen(8000,()=>{
    console.log("port connected");
})

