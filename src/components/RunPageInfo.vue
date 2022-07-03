<template>
    <el-row :gutter="20">
        <el-col :span="7">
            <el-card>
                <h3>Meta Data</h3>
                <el-table :data="MetaData" style="width: 100%" max-height="1000">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="7">
            <el-card>
                <h3>Parameters</h3>
                <el-table :data="ConfigData" style="width: 100%" max-height="800">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
</template> 


<script>
export default {
    components: {},
    name: 'RunPageInfo',
    props: {
      RunName:String,
      RunMeta:Array,
      RunConfig:Array,
    },
    data() {
      
      return {
        MetaData: [
        ],
        ConfigData: [
        ],
      }
    },
    mounted() {
      for (var key in this.RunMeta) {
        var item = this.RunMeta[key];
        this.MetaData.push({key: key, value:item})
}
      for (var key2 in this.RunConfig) {
        var item2 = this.RunConfig[key2];
        this.ConfigData.push({key: key2, value:item2})
}
      // console.log(this.ConfigData)
      
    }
}
</script>