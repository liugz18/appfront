<template>
<el-col>
    <el-row type="flex">
        <router-link to="/">
            <el-button type="primary" circle justify="start">
                <el-icon><back /></el-icon>    
            </el-button>  
        </router-link> 
    </el-row>
    <el-row v-if="RunName">
        <el-tabs :tab-position="tabPosition" stretch="true" style="width:100%" v-if="RunMeta">
            <el-tab-pane label="Info" v-if="RunMeta.logpath">
                <run-page-info :RunName="RunName" :RunMeta="RunMeta"></run-page-info>
            </el-tab-pane>
            <el-tab-pane label="Graphs" v-if="RunName">
                <run-page-graphs :RunName="RunName"></run-page-graphs>
            </el-tab-pane>
            <el-tab-pane label="Videos" v-if="RunMeta.videopath">
                <run-page-videos :VideoPath="proxy.$backend + RunMeta.videopath"></run-page-videos>
            </el-tab-pane>
            <el-tab-pane label="Logs" v-if="RunMeta.logpath">
                <run-page-logs :LogPath="proxy.$backend + RunMeta.logpath"></run-page-logs>
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
import {getCurrentInstance} from "vue";
  export default {
    data() {
      const { proxy } = getCurrentInstance() 
      return {
        proxy,
        RunMeta: [],
        tabPosition: 'left',
      }
    },
    props:{
            RunName:String
        },
    mounted() {
        this.proxy.$axios.get(this.proxy.$backend +'/runs/'+this.RunName).then(response => (this.RunMeta = response.data[0]))//))  console.log(response.data[0])
    },    
    components: {Back, RunPageLogs, RunPageInfo, RunPageVideos, RunPageGraphs},

  }
</script>