
const express = require('express');
const app = express(); // Changed to express()
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const URI = 'mongodb+srv://it22251114:200201300127Mongo@sliit.52z9ldp.mongodb.net/crud?retryWrites=true&w=majority&appName=SLIIT';

const connect = async () => {
    try{
        await mongoose.connect(URI);
        console.log('connected to mongoDB');

    }catch{
        console.log('mongoDB Error',error);
    }
};

connect();


const server = app.listen(port, host, () => {
    console.log(`node server listing to ${server.address().port}`);
});


app.use('/api', router);