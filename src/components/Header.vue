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
    name: 'Header',
    props: {
    },
    data() {
        return {}
    }
}
</script>