<template>
    <el-row :gutter="20">
        <el-col :span="7">
            <el-card>
                <h3>Meta Data</h3>
                <el-table :data="MetaData" style="width: 100%" max-height="250">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
            </el-card>
            <el-card>
                <h3>User Config</h3>
                <el-table :data="UserConfig" style="width: 100%" max-height="400">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="7">
            <el-card>
                <h3>Run Data</h3>
                <el-table :data="RunData" style="width: 100%" max-height="250">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
            </el-card>
            <el-card>
                <h3>Statistics</h3>
                <el-table :data="Statistics" style="width: 100%" max-height="400">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="7">
            <el-card>
                <h3>Full Config</h3>
                <el-table :data="UserConfig" style="width: 100%" max-height="400">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
                <el-table :data="RunData" style="width: 100%" max-height="250">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
                <el-table :data="Statistics" style="width: 100%" max-height="250">
                    <el-table-column prop="key" label="Key" width="200"> </el-table-column>
                    <el-table-column prop="value" label="Value" width="200"> </el-table-column>
                </el-table>
                <el-table :data="MetaData" style="width: 100%" max-height="400">
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
      RunMeta:Array
    },
    data() {
      
      return {
        MetaData: [
        ],
        RunData: [
        ],
        Statistics: [
          {
            key:"RunTime",value:342
          },
          {
            key:"Peak_CPU",value:97
          },
          {
            key:"Peak_Memory",value:234623423
          },
          {
            key:"Seed",value:42
          },
          {
            key:"Functions",value:684
          },
          {
            key:"Num_CPU",value:4
          },
          {
            key:"Num_GPU",value:2
          },
          {
            key:"Times",value:3
          },
          {
            key:"Duplicate",value:0
          },
        ],
        UserConfig: [
          {
            key:"Masks",value:0
          },
          {
            key:"Isolation",value:0
          },
          {
            key:"Isolation-Delay",value:"Null"
          },
          {
            key:"Isolation-Rate",value:"Null"
          },
          {
            key:"Masked-Type",value:"Null"
          },
          {
            key:"Vaccines",value:0
          },
          {
            key:"Stay-Home",value:0
          },
          {
            key:"School-Close",value:0
          },
          {
            key:"School-Close-Duration",value:"Null"
          },
        ],
      }
    },
    mounted() {
      var idx = 0;
      for (var key in this.RunMeta) {
        var item = this.RunMeta[key];
        if(idx<5){
        this.MetaData.push({key: key, value:item})
        }
        else{
          this.RunData.push({key: key, value:item})
        }
        idx = idx+1;
}
      
    }
}
</script>