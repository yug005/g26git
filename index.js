const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');

const app = express();
app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/blogs', require('./routes/blogs_routes'));
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => {
    console.log("Connected to MongoDB");
});
app.listen(3000, () => {
    console.log('Server 3000');
});