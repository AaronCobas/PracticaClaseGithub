import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("Inicio del servidor")
})

app.listen(8080,()=>console.log("Listening"))