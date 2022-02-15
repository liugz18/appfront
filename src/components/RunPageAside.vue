<template>
<el-col>
    <el-row type="flex">
        <router-link to="/">
            <el-button type="primary" circle justify="start">
                <el-icon><back /></el-icon>    
            </el-button>  
        </router-link>
    </el-row>
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="Info">Info</el-tab-pane>
        <el-tab-pane label="Graphs">Graphs</el-tab-pane>
        <el-tab-pane label="Videos">Videos</el-tab-pane>
        <el-tab-pane label="Logs">Logs</el-tab-pane>
    </el-tabs>
</el-col>
</template>

<script>
  import { Back } from '@element-plus/icons'
  export default {
    data() {
      return {
        tabPosition: 'left',
      }
    },
    components: {Back}
  }
</script>