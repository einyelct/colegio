<template>
    <ax-container>
        <b-alert v-if="isdelete" show variant="success"><p>Registro borrado Correctamente</p></b-alert>
         <b-table id="tabla" hover :items="todos" :fields="columsDefinition">
             <template #cell(id)="data">
                 <!-- <b-button v-on:click="say(data.value)" variant="success" style="margin-right:10px">Modificar</b-button> -->
                 <b-button value=this.id v-on:click="borrar(data.value)" variant="danger">Eliminar</b-button>
      </template></b-table>
        <!-- Ventana para editar -->


    </ax-container>
</template>

<script>
//let url = 'http://localhost:3000/api/alumnos/';

import axios from "axios";
// import Swal from 'sweetalert';

export default {
    name: 'tabla_ninos',
    data(){
        return{
            todos:null,
            // alumnos: [],
            // dialog: false,
            // operacion: '', 
            // alumno:{
            //     id:'',
            //     nombre:'',
            //     apellidos:'',
            //     telefono:'',
            //     nacimiento:'',
            //     sexo:''
            // }
            // sexo:['niño', 'niña'],
            columsDefinition:["id","nombre", "apellidos","telefono", "sexo", "nacimiento"],
            isdelete:false
        };
    },
    mounted(){
        this.getTodos();
    },

    methods:{
        getTodos(){
            axios
            .get('http://localhost:12792/api/Alumnos')
            .then( response => {
                console.log(response)
                this.todos= response.data
            })
            .catch(e=> console.log(e))
        },
        // crear:function(){
        //     let parametros = {
        //         nombre:this.alumno.nombre,
        //         apellidos:this.alumno.apellidos,
        //         telefono:this.alumno.telefono,
        //         nacimiento:this.alumno.nacimiento,
        //         sexo:this.alumno.sexo
        //     };
        //     axios.post(url,parametros)
        //     .then(response =>{
        //         this.mostrar();
        //         this.alumnos = response.data;
        //     });
        //     this.alumno.nombre="";
        //     this.alumno.apellidos="";
        //     this.alumno.telefono="";
        //     this.alumno.nacimiento="";
        //     this.alumno.sexo="";
        // },
        // editar: function(){
        //     let parametros = {
        //         nombre:this.alumno.nombre,
        //         apellidos:this.alumno.apellidos,
        //         telefono:this.alumno.telefono,
        //         nacimiento:this.alumno.nacimiento,
        //         sexo:this.alumno.sexo,
        //         id:this.alumno.id
        //     };
        //     axios.put(url+this.articulo.id, parametros)
        //     .then(response => {
        //         this.alumnos = response.data;
        //         this.mostrar();
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        // },
        borrar(num){
            console.log(num);
            axios
            .delete('http://localhost:12792/api/Alumnos/'+num)
            .then(response=>{
            this.mostrar();
            this.isdelete=true;
            console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(response=>{
        console.log(response);
        this.getTodos();
        })
         },
        // guardar:function(){
        //     if(this.operacion=='crear'){
        //         this.crear();
        //     }
        //     if(this.operacion=='editar'){
        //         this.editar();
        //     }
        //     this.dialog=false;
        // }, 
    },
    components: {
    },
    computed:{
    },
}
</script>

<style>

</style>