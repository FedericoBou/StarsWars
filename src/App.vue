<template>
  <div id="app">
    <div id="nav">
      <Head/>
      <router-link to="/">Home</router-link> ||
      <router-link to="/ships">Ships</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Head from '@/components/Head'

export default{
  components:{
    Head,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: url(backg/fondo-home.png); */
  background: black;
  height: 100%;
  /* background-repeat: repeat;
  background-size: 100vw; */
  
}

#nav {
  padding: 30px;
  margin-top: 180px ;
  background: black;
  vertical-align: top;
  border-left: 1px solid #333;
  box-sizing: border-box;
  padding: 0 22px;
  border-block: 1px ;
  border-block-start: white 1px solid;
  border-block-end: white 1px solid;

}

#nav a {
  font-weight: bold;
  color:white;
 
}

#nav a.router-link-exact-active {
  color: #ffb300;
}

</style>
