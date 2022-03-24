<template>
    <div class="buttons"> 
        <button v-on:click="$store.commit('bajarContador')">-</button> 
        <button v-on:click="$store.commit('subirContador')">+</button> 
        <button @click="$store.dispatch('cambiarContador')">?</button>
        <button @click="$store.dispatch('randomContador')">?x2</button>
    </div>
</template>

<script>
    export default{
        name: 'Botones',
    }
</script>