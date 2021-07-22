<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="far fa-plus-square addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
    data: function() {
        return{
            newTodoItem: ""
        }
    },
    methods:{
        addTodo: function(){
            console.log(this.newTodoItem);
            localStorage.setItem(this.newTodoItem,this.newTodoItem);
            this.clearInput();
        },
        clearInput : function(){
            this.newTodoItem = "";
        }
    }
    
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background-color: #fff;
    height:50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    padding:0 1rem;
    float:left;
    display: block;
    width:calc(100% - 50px);
    height: 100%;
    border-style: none;
    font-size:0.9rem;
    box-sizing: border-box;
}
.addContainer{
    cursor: pointer;
    float:right;
    background:linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 50px;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color:#fff;
    vertical-align: middle;
}

</style>