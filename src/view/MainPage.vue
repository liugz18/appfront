<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <el-checkbox>!!{{ msg }}</el-checkbox>
  </div -->
 <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">
      <main-page-aside></main-page-aside>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template> 


<script>
import MainPageAside from '../components/MainPageAside.vue'
export default {
  components: { MainPageAside },
  name: 'MainPage',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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