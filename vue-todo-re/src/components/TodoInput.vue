<template>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
     <button v-on:click="addTodo">add</button>
</template>

<script>
export default {
    data : function(){
        return{
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function(){
            if(this.newTodoItem !== ''){
            var obj = {completed: false, item: this.newTodoItem};
            localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
            this.clearInput();
            }
        },
        clearInput: function(){
            this.newTodoItem = ""; // 초기화
        }
    }
}
</script>