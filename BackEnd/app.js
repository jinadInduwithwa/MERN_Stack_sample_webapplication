const express = require('express');
const cors = require('cors');
const controller = require('./controller'); 

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Corrected route paths
app.get('/users', (req, res) => {
    controller.getUser((req, res, next) => {
        res.send();
    });
});

app.post('/createuser', (req, res) => {
    const id = req.query.id; 
    controller.addUser(req.body, (callack) => {
        res.send();
    });
});

app.post('/updateuser', (req, res) => {
    const id = req.query.id; 
    controller.updateUSer(req.body, (callack) => {
        res.send(callack);
    });
});

app.post('/deleteuser', (req, res) => {
    const id = req.query.id; 
    controller.deleteUser(req.body, (callack) => {
        res.send(callack);
    });
});

module.exports = app;
