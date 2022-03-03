<template>
    <el-container>
        <el-header>Run-Header</el-header>
        <el-container>
            <run-page-aside :RunName="$route.params.RunName"></run-page-aside>
        </el-container>
    </el-container>
</template> 


<script>
import RunPageAside from '../components/RunPageAside.vue'
export default {
  components: { RunPageAside },
  name: 'RunPage',
  props: {
  },
  mounted () {
    console.log('RunPage', this.$route.params)
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
.el-header {
        height: 40px;
        background-color: #000;
    }
.el-container {
        height: 100%;
    }
.el-aside {
        background-color: #545c64;
    }
</style>