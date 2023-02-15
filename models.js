const mongoose = require('mongoose');

//Schema Alumno

const Alumno = mongoose.model('Alumno', new mongoose.Schema(
    {
        nombre: { type: String, default: "Sin nombre" },
        curso: { type: String, default: "No especificado" }
    }
));

//Schema Profesor

const Profesor = mongoose.model('Profesor', new mongoose.Schema(
    {
        nombre: { type: String, default: "Sin nombre" },
        asignatura: { type: String, default: "No especificado" }
    }
));

module.exports = {
  Alumno: Alumno,
  Profesor: Profesor
}