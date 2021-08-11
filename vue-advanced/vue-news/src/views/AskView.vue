<template>
  <div>
    <p v-for="item in fetchedAsk"> 
      <a v-bind:href="item.url">
        {{ item.title }} 
      </a> 
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
      ...mapGetters([
         'fetchedAsk'
      ]),
    
    // ...mapState({
    //   ask: state => state.ask
    // }),

    // ask(){
    //   return this.$store.state.asks;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>