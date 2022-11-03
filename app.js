'use strict';

const express = require('express');
const bp = require('body-parser');
const app = express();
const db = require('./queries');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send('Hello, up-to-date world!!').end();
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

module.exports = app;
