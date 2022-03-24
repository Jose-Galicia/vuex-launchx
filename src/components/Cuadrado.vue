<template>
    <div class="cuadrado">
      {{$store.state.counter}} <sup>2</sup> = {{$store.getters.cuadrado}} 
    </div>
</template>

<script>
    export default{
        name: 'Cuadrado',
    }
</script>