const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get("/alumnos", cors(), controller.readAlumnos);  // Read All
router.get("/alumnos/:id", cors(), controller.readAlumno);    // Read
router.delete("/alumnos/:id", cors(), controller.deleteAlumno);  // Delete
router.put("/alumnos/:id", cors(), controller.updateAlumno);  // Update
router.post("/alumnos", cors(), controller.createAlumno);  // Create

router.get("/profesores", cors(), controller.readProfesores);  // Read All
router.get("/profesores/:id", cors(), controller.readProfesor);   // Read
router.delete("/profesores/:id", cors(), controller.deleteProfesor); // Delete
router.put("/profesores/:id", cors(), controller.updateProfesor); // Update
router.post("/profesores", cors(), controller.createProfesor); // Create


module.exports = router;