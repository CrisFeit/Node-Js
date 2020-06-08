<template>
  <div class="view-profile">
    <h3>Profile for {{userId}} </h3>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile', 
   data() {
      return {
        userId : this.$route.params.user_id,
      }
    },
    methods : {
      updateId(){
        this.userId = this.$route.params.user_id
      }
    },
    watch : {
      $route : 'updateId'
    }
}
</script>

<style>

</style>