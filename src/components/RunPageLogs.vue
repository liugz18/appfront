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
            <el-input v-model="input_text" autosize type="textarea" style="width:100%"/>
                <!-- <textarea v-model="input_text" name="" :autosize="{ minRows: 200, minCols: 60 }" disabled ></textarea><br><br> -->
                <!-- <button class="item" @click="showFile()" >show</button> -->
                <!-- <p class="para" >{{ input_text }}</p> -->
            <!-- {{showFile()}} -->
            <!-- </div>  -->
        </el-scrollbar>

    <!-- </el-row> -->
</template> 


<script>

export default {
    components: {},
    name: 'RunPageLogs',
    props: {
    },
    data() {
      return {
        max: 0,
        value: 0,
        input_text: 'Day 0 Date 2012-01-02 WkDay Tue C 10 College 0 Cs 0 E 10 GQ 0 I 0 Is 0 M 0 Military 0 N 1218695 Nursing_Home 0 P 10 Prison 0 R 0 S 1218685 Week 1 Year 2012 AR 0.00 ARs 0.00 RR 0.00 \n\
Day 1 Date 2012-01-03 WkDay Wed C 0 College 0 Cs 0 E 10 GQ 0 I 0 Is 0 M 0 Military 0 N 1218695 Nursing_Home 0 P 10 Prison 0 R 0 S 1218685 Week 1 Year 2012 AR 0.00 ARs 0.00 RR 0.00 \n\
Day 2 Date 2012-01-04 WkDay Thu C 2 College 1 Cs 7 E 2 GQ 1 I 10 Is 7 M 0 Military 0 N 1218695 Nursing_Home 0 P 12 Prison 0 R 0 S 1218683 Week 1 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 3 Date 2012-01-05 WkDay Fri C 1 College 0 Cs 0 E 3 GQ 0 I 10 Is 7 M 0 Military 0 N 1218695 Nursing_Home 0 P 13 Prison 0 R 0 S 1218682 Week 1 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 4 Date 2012-01-06 WkDay Sat C 2 College 0 Cs 1 E 3 GQ 0 I 11 Is 7 M 0 Military 0 N 1218695 Nursing_Home 0 P 14 Prison 0 R 1 S 1218680 Week 1 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 5 Date 2012-01-07 WkDay Sun C 1 College 0 Cs 0 E 4 GQ 0 I 11 Is 7 M 0 Military 0 N 1218695 Nursing_Home 0 P 15 Prison 0 R 1 S 1218679 Week 2 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 6 Date 2012-01-08 WkDay Mon C 3 College 0 Cs 0 E 5 GQ 0 I 10 Is 4 M 0 Military 0 N 1218695 Nursing_Home 0 P 15 Prison 0 R 4 S 1218676 Week 2 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 7 Date 2012-01-09 WkDay Tue C 4 College 0 Cs 1 E 7 GQ 0 I 9 Is 4 M 0 Military 0 N 1218695 Nursing_Home 0 P 16 Prison 0 R 5 S 1218674 Week 2 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 8 Date 2012-01-10 WkDay Wed C 4 College 0 Cs 2 E 8 GQ 0 I 8 Is 4 M 0 Military 0 N 1218695 Nursing_Home 0 P 16 Prison 0 R 7 S 1218672 Week 2 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 9 Date 2012-01-11 WkDay Thu C 3 College 0 Cs 2 E 8 GQ 0 I 11 Is 6 M 0 Military 0 N 1218695 Nursing_Home 0 P 19 Prison 0 R 7 S 1218669 Week 2 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 10 Date 2012-01-12 WkDay Fri C 9 College 3 Cs 2 E 12 GQ 3 I 13 Is 7 M 0 Military 0 N 1218695 Nursing_Home 0 P 25 Prison 0 R 8 S 1218662 Week 2 Year 2012 AR 0.00 ARs 0.00 RR 0.70\n\
Day 11 Date 2012-01-13 WkDay Sat C 4 College 1 Cs 7 E 9 GQ 1 I 18 Is 13 M 0 Military 0 N 1218695 Nursing_Home 0 P 27 Prison 0 R 9 S 1218659 Week 2 Year 2012 AR 0.00 ARs 0.00 RR 0.00\n\
Day 12 Date 2012-01-14 WkDay Sun C 2 College 1 Cs 2 E 6 GQ 1 I 21 Is 14 M 0 Military 0 N 1218695 Nursing_Home 0 P 27 Prison 0 R 10 S 1218658 Week 3 Year 2012 AR 0.00 ARs 0.00 RR 1.50\n\
Day 13 Date 2012-01-15 WkDay Mon C 10 College 0 Cs 2 E 13 GQ 0 I 21 Is 15 M 0 Military 0 N 1218695 Nursing_Home 0 P 34 Prison 0 R 11 S 1218650 Week 3 Year 2012 AR 0.00 ARs 0.00 RR 5.00\n\
Day 14 Date 2012-01-16 WkDay Tue C 11 College 0 Cs 2 E 21 GQ 0 I 19 Is 13 M 0 Military 0 N 1218695 Nursing_Home 0 P 40 Prison 0 R 15 S 1218640 Week 3 Year 2012 AR 0.01 ARs 0.00 RR 0.50\n\
Day 15 Date 2012-01-17 WkDay Wed C 9 College 0 Cs 5 E 20 GQ 0 I 28 Is 17 M 0 Military 0 N 1218695 Nursing_Home 0 P 48 Prison 0 R 16 S 1218631 Week 3 Year 2012 AR 0.01 ARs 0.00 RR 1.00\n\
Day 16 Date 2012-01-18 WkDay Thu C 12 College 0 Cs 5 E 23 GQ 0 I 30 Is 17 M 0 Military 0 N 1218695 Nursing_Home 0 P 53 Prison 0 R 21 S 1218621 Week 3 Year 2012 AR 0.01 ARs 0.00 RR 1.33\n\
Day 17 Date 2012-01-19 WkDay Fri C 23 College 1 Cs 8 E 36 GQ 1 I 37 Is 23 M 0 Military 0 N 1218695 Nursing_Home 0 P 73 Prison 0 R 23 S 1218599 Week 3 Year 2012 AR 0.01 ARs 0.00 RR 2.75\n\
Day 18 Date 2012-01-20 WkDay Sat C 9 College 0 Cs 10 E 29 GQ 0 I 46 Is 28 M 0 Military 0 N 1218695 Nursing_Home 0 P 75 Prison 0 R 28 S 1218592 Week 3 Year 2012 AR 0.01 ARs 0.00 RR 3.00\n\
Day 19 Date 2012-01-21 WkDay Sun C 15 College 1 Cs 12 E 28 GQ 1 I 58 Is 37 M 0 Military 0 N 1218695 Nursing_Home 0 P 86 Prison 0 R 31 S 1218578 Week 4 Year 2012 AR 0.01 ARs 0.01 RR 0.00\n\
Day 20 Date 2012-01-22 WkDay Mon C 44 College 1 Cs 8 E 58 GQ 1 I 64 Is 39 M 0 Military 0 N 1218695 Nursing_Home 0 P 122 Prison 0 R 37 S 1218536 Week 4 Year 2012 AR 0.01 ARs 0.01 RR 1.22\n\
Day 21 Date 2012-01-23 WkDay Tue C 50 College 1 Cs 10 E 92 GQ 1 I 73 Is 46 M 0 Military 0 N 1218695 Nursing_Home 0 P 165 Prison 0 R 40 S 1218490 Week 4 Year 2012 AR 0.02 ARs 0.01 RR 2.00\n\
Day 22 Date 2012-01-24 WkDay Wed C 77 College 0 Cs 26 E 130 GQ 0 I 103 Is 67 M 0 Military 0 N 1218695 Nursing_Home 0 P 233 Prison 0 R 45 S 1218417 Week 4 Year 2012 AR 0.03 ARs 0.01 RR 1.00\n\
Day 23 Date 2012-01-25 WkDay Thu C 108 College 0 Cs 36 E 178 GQ 0 I 146 Is 92 M 0 Military 0 N 1218695 Nursing_Home 0 P 324 Prison 0 R 56 S 1218315 Week 4 Year 2012 AR 0.03 ARs 0.01 RR 3.00\n\
Day 24 Date 2012-01-26 WkDay Fri C 116 College 0 Cs 49 E 219 GQ 0 I 200 Is 127 M 0 Military 0 N 1218695 Nursing_Home 0 P 419 Prison 0 R 70 S 1218206 Week 4 Year 2012 AR 0.04 ARs 0.02 RR 1.55\n\
Day 25 Date 2012-01-27 WkDay Sat C 79 College 1 Cs 75 E 191 GQ 1 I 295 Is 194 M 0 Military 0 N 1218695 Nursing_Home 0 P 486 Prison 0 R 78 S 1218131 Week 4 Year 2012 AR 0.05 ARs 0.02 RR 2.11\n\
Day 26 Date 2012-01-28 WkDay Sun C 78 College 1 Cs 72 E 162 GQ 1 I 368 Is 243 M 0 Military 0 N 1218695 Nursing_Home 0 P 530 Prison 0 R 101 S 1218064 Week 5 Year 2012 AR 0.06 ARs 0.03 RR 2.33\n\
Day 27 Date 2012-01-29 WkDay Mon C 276 College 1 Cs 49 E 357 GQ 1 I 418 Is 274 M 0 Military 0 N 1218695 Nursing_Home 0 P 775 Prison 0 R 119 S 1217801 Week 5 Year 2012 AR 0.08 ARs 0.03 RR 3.74\n\
Day 28 Date 2012-01-30 WkDay Tue C 330 College 0 Cs 76 E 567 GQ 0 I 487 Is 313 M 0 Military 0 N 1218695 Nursing_Home 0 P 1054 Prison 0 R 156 S 1217485 Week 5 Year 2012 AR 0.11 ARs 0.04 RR 3.56\n\
Day 29 Date 2012-01-31 WkDay Wed C 437 College 1 Cs 166 E 757 GQ 1 I 664 Is 443 M 0 Military 0 N 1218695 Nursing_Home 0 P 1421 Prison 0 R 192 S 1217082 Week 5 Year 2012 AR 0.14 ARs 0.05 RR 1.73\n\
Day 30 Date 2012-02-01 WkDay Thu C 649 College 1 Cs 235 E 1053 GQ 1 I 937 Is 623 M 0 Military 0 N 1218695 Nursing_Home 0 P 1990 Prison 0 R 247 S 1216458 Week 5 Year 2012 AR 0.20 ARs 0.07 RR 3.27\n\
Day 31 Date 2012-02-02 WkDay Fri C 851 College 0 Cs 285 E 1466 GQ 0 I 1270 Is 846 M 0 Military 0 N 1218695 Nursing_Home 0 P 2736 Prison 0 R 309 S 1215650 Week 5 Year 2012 AR 0.26 ARs 0.09 RR 2.54\n\
Day 32 Date 2012-02-03 WkDay Sat C 412 College 2 Cs 442 E 1239 GQ 2 I 1770 Is 1193 M 0 Military 0 N 1218695 Nursing_Home 0 P 3009 Prison 0 R 404 S 1215282 Week 5 Year 2012 AR 0.30 ARs 0.13 RR 2.58\n\
Day 33 Date 2012-02-04 WkDay Sun C 564 College 2 Cs 531 E 1011 GQ 2 I 2380 Is 1602 M 0 Military 0 N 1218695 Nursing_Home 0 P 3391 Prison 0 R 526 S 1214778 Week 6 Year 2012 AR 0.35 ARs 0.17 RR 2.55\n\
Day 34 Date 2012-02-05 WkDay Mon C 1808 College 1 Cs 295 E 2350 GQ 1 I 2559 Is 1705 M 0 Military 0 N 1218695 Nursing_Home 0 P 4909 Prison 0 R 718 S 1213068 Week 6 Year 2012 AR 0.49 ARs 0.20 RR 2.96\n\
Day 35 Date 2012-02-06 WkDay Tue C 1814 College 3 Cs 496 E 3428 GQ 3 I 2962 Is 1980 M 0 Military 0 N 1218695 Nursing_Home 0 P 6390 Prison 0 R 939 S 1211366 Week 6 Year 2012 AR 0.64 ARs 0.24 RR 2.62\n',
    }},


    methods: {
      
    },
  
}
</script>

