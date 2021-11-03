<template>
    <ul>
        <li v-for="todoItem in todoItems" :key="todoItem">
            <input type="checkbox" :class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplate({todoItem,index})"/>
            {{ todoItem }}
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">X</span>
        </li>
    </ul>
</template>
<script>
export default {
    data : function(){
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        toggleComplate: function(todoItem, index){
            console.log(todoItem, index)
        }
    },
    created: function() {
        if(localStorage.length > 0 ) {
            for(var i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>