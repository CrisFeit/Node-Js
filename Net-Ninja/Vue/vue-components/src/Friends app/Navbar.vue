<template>
  <nav class="main-nav">
    <ul>
      <li> <a href="">Home</a> </li>
      <li> <a href="">About</a> </li>
      <li> <a href="">Contact</a> </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style>
  .main-nav{
    text-align: center;

  }
  .main-nav ul{
    padding: 0;
  }
  .main-nav li{
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 10px;
    font-size: 1.2rem;
  }
  .main-nav li a{
    text-decoration: none;
  }
</style>