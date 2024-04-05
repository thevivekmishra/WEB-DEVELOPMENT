const express = require('express');
// or import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Declare port once

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "joke",
            content: "this is a joke"
        },
        {
            id: 2,
            title: "joke",
            content: "this is second joke",
        },
        {
            id: 3,
            title: "joke",
            content: "this is third joke"
        },
        {
            id: 4,
            title: "joke",
            content: "this is fourth joke",
        },
    ];
    res.send(jokes);
});

//to run terminal -> npm run start