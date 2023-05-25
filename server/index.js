const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "apeajal"
});

app.get('/createdb', function(req, ser){
    connection.getConnection((err, connection) =>{
        connection.query('', (error, result, fields) =>{
            res.send(result);
        });
    });
});

app.get('/markers', function(req, res){
    res.send('prueba');

})

app.listen(3000, () => {
    console.log('Servidor iniciado;')
});

