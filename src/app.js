import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("Inicio del servidor")
})

app.get("/endpointsenior",(req,res)=>{
res.send("Endpoint hecho por senior")
})

app.get("/endpoinjr",(req,res)=>{
    res.send("Endpoin hecho por jr")
})

app.listen(8080,()=>console.log("Listening"))