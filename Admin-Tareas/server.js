const express = required("express")
const app = express()
const port = 3400()


app.get("/", (res,req) =>{
    res.send("You made it!!!!!")
})


app.listen(port,()=>{
    console.log("Conectando...Conexion Exitosa")
})