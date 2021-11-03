<template>
    <TodoTitle></TodoTitle>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoBtn></TodoBtn>
</template>

<script>
import TodoTitle from './components/TodoTitle.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoBtn from './components/TodoBtn.vue'

export default {
  data(){
    return {
      todoItems: []
    }
  },
  methods: {

  },
  components : {
    TodoTitle,
    TodoInput,
    TodoList,
    TodoBtn
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
