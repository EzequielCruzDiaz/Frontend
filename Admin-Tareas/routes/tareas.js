const express = require("express");
const { parse } = require("path");
const router = express.router;

let tareas = [];


router.get("/", (req,res)=>{
    res.json(tareas)
});


router.post("/",(req, res)=>{
    const nuevaTarea = {
        id: tareas.length + 1,
        titulo: req.body.titulo,
        Completada:false
    };

    tareas.push(nuevaTarea);
    res.status("Se Añadio Una tarea",201).json(nuevaTarea);

});

router.get("/:id",  (req, res)=>{
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if(!tarea) return res.status(404).send("Tarea no encontrada");
    res.json(tarea);
});


router.put("/:id", (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if(!tarea) return res.status(404).send('Tarea no encontrada');


    tarea.titulo = req.body.titulo;
    tarea.Completada = req.body.Completada;
    res.json(tarea);

});

router.delete("/:id", (req, res)=> {
    const tareaIndex = tareas.findIndex(t => t.id === (req.params.id));
    if(tareaIndex === -1) return res.status(404).send("Tarea no encontrada");

    const tareaEliminada = tareas.splice(tareaIndex, 1);
    res.json(tareaEliminada);

});

module.exports = router;