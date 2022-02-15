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
        </el-col>
    </el-row>
</template> 


<script>
export default {
    components: {},
    name: 'RunPageInfo',
    props: {
    },
    data() {

      return {
        MetaData: [
          {
            key: 'Date',
            value: 'Tue Jan 25 12:29:11 CST 2022',
          },
          {
            key: 'Density',
            value: '609.347500',
          },
          {
            key: 'Finished',
            value: 'Tue Jan 25 12:31:03 2022',
          },
          {
            key: 'FIPS',
            value: '42003',
          },
          {
            key: 'FIPS',
            value: '42003',
          },
          {
            key: 'KEY',
            value: 'stay___60',
          },
          {
            key: 'Popsize',
            value: '1218695',
          },
          {
            key: 'Population',
            value: '$FRED_HOME/populations/2010_ver1_42003',
          },
          {
            key: 'User',
            value: 'liugz18',
          },
          {
            key: 'Where',
            value: 'LAPTOP-O8O79RTP',
          },
        ],
      }
    },
}
</script>