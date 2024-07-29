const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
const tareasRouter = require("./routes/tareas");

app.get("/", (req,res)=>{
    res.send(`Saludos usuario, que tareas tenemos para hoy `);
})

app.use("/api/tareas", tareasRouter);

app.listen(port,()=>{
    console.log(`Conectando...Conexion Exitosa http://localhost:${port}`)
})

