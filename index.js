const express= require('express');
const app = express()
const port = 3000; 

const students = {
    1:{
        name:"Carlos Andres",
        lastname: "Diaz Mendez",
        email: "carlosdime@unisabana.edu.co",
        id: "322067"
    },

    2:{
        name:"Manuel David",
        lastname:"Carreño Buitrago",
        email:"manuelcar@unisabana.edu.co",
        id:"322089"
    }
};

app.get('/user-info/:id', (req, res) => {
    const studentId= req.params.id;

    if(!students[studentId]){
        return res.status(404).send({ error: "El estudiante no existe" }); 
    }

    res.json(students[studentId]);
});

app.listen(port, () => {
    console.log('Listening on port', port);
});