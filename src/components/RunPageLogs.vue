<template>
    <!-- <el-row> -->
        
        <!-- <el-slider
            v-model="value"
            @input="inputSlider"
            :max="max"
            :format-tooltip="formatTooltip"

        ></el-slider> -->
        <el-scrollbar ref="scrollbar" height="800px" style="width:100%"  always @scroll="scroll">
            
            <!-- <div ref="inner" style="width=100%"> -->
                <!-- <h3>导入文件：<input type="file" name="file" @change="showFile($event)" /> </h3><br> -->
            <el-input v-model="input_text" autosize type="textarea" style="width:100%" readonly/>
                <!-- <textarea v-model="input_text" name="" :autosize="{ minRows: 200, minCols: 60 }" disabled ></textarea><br><br> -->
                <!-- <button class="item" @click="showFile()" >show</button> -->
                <!-- <p class="para" >{{ input_text }}</p> -->
            <!-- {{showFile()}} -->
            <!-- </div>  -->
        </el-scrollbar>

    <!-- </el-row> -->
</template> 


<script>
import {getCurrentInstance} from "vue";
export default {
    components: {},
    name: 'RunPageLogs',
    props: {
        LogPath:String
    },
    data() {    
      const { proxy } = getCurrentInstance() 
      return {
        max: 0,
        value: 0,
        proxy,
        input_text: [],//reader.readAsText(this.LogPath)
        }
    },

    mounted() {
    this.proxy.$axios.get(this.LogPath).then(response => (this.input_text = response.data))
    },
    methods: {
    },
  
}
</script>

