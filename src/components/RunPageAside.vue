<template>
<el-col>
    <el-row type="flex">
        <router-link to="/">
            <el-button type="primary" circle justify="start">
                <el-icon><back /></el-icon>    
            </el-button>  
        </router-link> 
    </el-row>
    <el-row >
        <el-tabs :tab-position="tabPosition" stretch="true" style="width:100%">
            <el-tab-pane label="Info">
                <run-page-info></run-page-info>
            </el-tab-pane>
            <el-tab-pane label="Graphs">
                <run-page-graphs></run-page-graphs>
            </el-tab-pane>
            <el-tab-pane label="Videos">
                <run-page-videos></run-page-videos>
            </el-tab-pane>
            <el-tab-pane label="Logs">
                <run-page-logs></run-page-logs>
            </el-tab-pane>
        </el-tabs>
    </el-row>
</el-col>
</template>

<script>
import { Back } from '@element-plus/icons'
import RunPageLogs from './RunPageLogs.vue'
import RunPageInfo from './RunPageInfo.vue'
import RunPageVideos from './RunPageVideos.vue'
import RunPageGraphs from './RunPageGraphs.vue'
  export default {
    data() {
      return {
        tabPosition: 'left',
      }
    },
    components: {Back, RunPageLogs, RunPageInfo, RunPageVideos, RunPageGraphs}
  }
</script>