const express = require('express');
const sequelize = require('sequelize');
const app = express();

sequelize

app.get('/calculate/:test/:huy', function (req, res) {
    res.send(String(Number(req.query.a) + Number(req.query.b)));
});



app.listen(3000);