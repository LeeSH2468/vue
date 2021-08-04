<template>
  <div class="clearAllontainer">
      <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      // this.$emit('clearAll');
      this.$store.commit('removeAllItem')
    }
  }
 
}
</script>

<style scoped>
.clearAllontainer{
  width: 8.5rem;
  height: 50px;
  line-height:50px;
  background-color: #fff;
  border-radius: 5px;
  margin:0 auto;
}
.clearAllBtn{
  display: block;
  color:#e20303;
  cursor: pointer;
}
</style>