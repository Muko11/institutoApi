const { Alumno, Profesor } = require("./models.js");

//Alumnos

exports.readAlumnos = (req, res) =>
    Alumno.find(
        {}, (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

exports.readAlumno = (req, res) =>
    Alumno.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.createAlumno = (req, res) =>
    new Alumno({ nombre: req.body.nombre, curso: req.body.curso })
        .save(
            (error, data) => {
                if (error) res.json(error);
                else res.json(data)
            });

exports.deleteAlumno = (req, res) =>
    Alumno.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.updateAlumno = (req, res) =>
    Alumno.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, curso: req.body.curso } },
        (error, data) => {
            if (error) res.json(error);
            else res.json(data)
        }
    );




//Profesores

exports.readProfesores = (req, res) =>
    Profesor.find(
        {}, (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });

exports.readProfesor = (req, res) =>
    Profesor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.createProfesor = (req, res) =>
    new Profesor({ nombre: req.body.nombre, asignatura: req.body.asignatura })
        .save(
            (error, data) => {
                if (error) res.json(error);
                else res.json(data)
            });

exports.deleteProfesor = (req, res) =>
    Profesor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.updateProfesor = (req, res) =>
    Profesor.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, asignatura: req.body.asignatura } },
        (error, data) => {
            if (error) res.json(error);
            else res.json(data)
        }
    );