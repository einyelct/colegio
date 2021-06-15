var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());
//***************Conexion**************
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'colegio'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conexion exitosa bbdd");
    }
});

//***********Consultas******************
app.get('/', function(req,res){
    res.send('Ruta Inicio');
});

//---------Extrae todos los datos--------
app.get('/api/alumnos', (req,res)=>{
    conexion.query('SELECT * FROM alumnos', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

//-------Extrae un dato----------
app.get('/api/alumnos/:id', (req,res)=>{
    conexion.query('SELECT * FROM alumnos WHERE id = ?',[req.params.id], (error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    })
});

//---------Insertar Dato----------
app.post('/api/alumnos', (req,res)=>{
    let data = {nombre:req.body.nombre, apellidos:req.body.apellidos, telefono:req.body.telefono, nacimiento:req.body.nacimiento, sexo:req.body.sexo};
    let sql = "INSERT INTO alumnos SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
});

//-------Editar Registro--------
app.put('/api/alumnos/:id', (req,res)=>{
    let id = req.params.id;
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let telefono = req.body.telefono;
    let nacimiento = req.body.nacimiento;
    let sexo = req.body.sexo;
    let sql = "UPDATE alumnos SET nombre = ?, apellidos = ?, telefono = ?, nacimiento = ?, sexo = ? WHERE id = ?";
    conexion.query(sql, [id, nombre, apellidos, telefono, nacimiento, sexo], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
});

//-----------eliminar dato---------
app.delete('/api/alumnos/:id', (req,res)=>{
    conexion.query('DELETE FROM alumnos WHERE id = ?', [req.params.id], function(error, fila){
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    })
});




const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function(){
    console.log("Servidor OK en puerto:"+puerto);
});