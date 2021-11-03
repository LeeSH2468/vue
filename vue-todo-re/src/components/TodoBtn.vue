<template>
    <button type="submit" v-on:click="clearTodo">Clear All</button>
</template>
<script>
export default {
    methods: {
        clearTodo: function(){
            localStorage.clear();
        }
    }
}
</script>