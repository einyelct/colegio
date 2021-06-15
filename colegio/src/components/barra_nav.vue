<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/inicio">Inicio</b-nav-item>
                    <b-nav-item to="/lista_ninos">Lista Alumnos</b-nav-item>
                    <b-nav-item to="/formulario">Nuevo Ingreso</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>


export default {
  name: 'Barra_nav',
  components: {
  }
}
</script>

<style>

</style>