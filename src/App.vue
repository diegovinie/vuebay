<template>
  <div id="app">
    <nav-bar></nav-bar>
    <search/>
    <el-row>
      <el-col :span="6">
        <side-menu></side-menu>
      </el-col>
      <el-col :span="18">
        <list></list>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  name: 'app',

  data () {
    return {
 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
