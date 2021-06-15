<template>
<div>
        <b-alert v-if="isSuccess" show variant="success"><p>Registro almacenado Correctamente</p></b-alert>
    
    <form @submit.prevent="postData" >
        <b-form-group id="input-group-1" label="Nombre:">
            <b-form-input v-model="alumno.nombre" type="text" placeholder="Introduzca nombre" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Apellidos:">
            <b-form-input v-model="alumno.apellidos" type="text" placeholder="Introduzca sus apellidos" required ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Telefono:">
            <b-form-input v-model="alumno.telefono" type="number" placeholder="Introduzca telefonode contacto" required></b-form-input>
        </b-form-group>

        <b-form-group>
            <label for="example-datepicker">Fecha de nacimiento</label>
            <b-form-datepicker v-model="alumno.nacimiento" type="date" class="mb-2" ></b-form-datepicker>
        </b-form-group>

        <b-form-group id="input-group-3" label="Sexo:">
            <b-form-select v-model="alumno.sexo" :options="sexo" required type="text"></b-form-select>
        </b-form-group>
        <br>
        <b-form-group>
            <b-button class="btn-primary"  type="submit" dark>Guardar</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form-group>
    </form>
  </div>
</template>

<script>
//let url = 'http://localhost:3000/api/alumnos/';

import axios from "axios";

export default {
    name: 'formulario',
    data(){
        return {
          alumno:{
            id: null,
            nombre:'',
            apellidos:'',
            telefono:'',
            nacimiento:'',
            sexo:'',
            
        },
        sexo: ['niño','niña'],
        isSuccess:false
        }
    },
    
    methods:{
        postData(){

            axios
            .post('http://localhost:12792/api/Alumnos', {
            id:0,
            nombre:this.alumno.nombre,
            apellidos:this.alumno.apellidos,
            telefono:parseInt(this.alumno.telefono), 
            sexo:this.alumno.sexo,
            nacimiento:this.alumno.nacimiento
           
        })
        .then(response=>{
            this.isSuccess=true;
            console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })
        }


    }
}
</script>

<style>

</style>