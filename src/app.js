import express from "express";

const app = express();

const PORT = process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.send("Inicio del servidor")
})

app.get("/endpointsenior",(req,res)=>{
res.send("Endpoint hecho por senior")
})

app.get("/endpoinjr",(req,res)=>{
    res.send("Endpoin hecho por jr")
})

app.get("/nuevoEndpoint",(req,res)=>{
    res.send("otro endpoint")
})

app.listen(PORT,()=>console.log("Listening on " + PORT))