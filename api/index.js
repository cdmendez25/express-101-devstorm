const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const app = express();

app.use(cors());

const students = {
  1: {
    name: "Carlos Andres",
    lastname: "Diaz Mendez",
    email: "carlosdime@unisabana.edu.co",
    id: "322067"
  },
  2: {
    name: "Manuel David",
    lastname: "Carreño Buitrago",
    email: "manuelcar@unisabana.edu.co",
    id: "322089"
  }
};

app.get('/:id', (req, res) => {
  const studentId = req.params.id;
  if (!students[studentId]) {
    return res.status(404).send({ error: "El estudiante no existe" });
  }
  res.json(students[studentId]);
});

module.exports = app;
module.exports.handler = serverless(app);