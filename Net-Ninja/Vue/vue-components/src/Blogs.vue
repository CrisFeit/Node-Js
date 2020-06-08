<template>
  <div class="blogs">
    <h2>Blogs</h2>
    <input type="text" v-model="searchTerm">
    <div v-for="post in filteredPosts" :key="post.id">
      <h3> {{post.title}} </h3>
      <div> {{post.body | snippet }} </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Blogs',

  data() {
    return {
      posts: [],
      searchTerm:''
    }
  },
  methods :{

  },
  computed :{
    filteredPosts(){
      return this.posts.filter(post => {
          return post.title.match(this.searchTerm)
      })
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(resp =>{
      console.log(resp)
      this.posts = resp.data 
    });
  }
}
</script>

<style>

</style>