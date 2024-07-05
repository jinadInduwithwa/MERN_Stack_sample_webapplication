const { response } = require('express');
const User = require('./model');


const getUser = (req, res, next) => {
    User.find() //select 
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json({ error: error.messag })
        })
};

const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response => {
            res.json({ response })
        })
        .catch( error => {
            res.json({ error: error.messag })
        })
};

const updateUser = (req, res, next) => {
    const { id, name } = req.body;
    User.updateOne({ id: id}, { $set: { name: name }})
        .then(response => {
            res.json({ response })
        })
        .catch( error => {
            res.json({ error: error.messag })
        })
}

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({ id:id })
    .then(response => {
        res.json({ response })
    })
    .catch( error => {
        res.json({ error: error.messag })
    })
    
}





exports.getUser = getUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
