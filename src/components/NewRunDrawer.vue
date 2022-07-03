<template>
  <el-drawer
    title="I am the title"
    :with-header="false"
    direction="ltr"
    custom-class="demo-drawer"
    v-model="drawer"
    ref="drawer"
  >
    <div class="demo-drawer__content">
      <h3>Create New Run</h3>
      <el-tabs v-model="activeName">
      <el-tab-pane label="Beginner" name="first">
        <el-form :model="form">
        <el-form-item label="Run Name" :label-width="formLabelWidth">
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Location" :label-width="formLabelWidth">
          <el-select
            v-model="form.fips"
            placeholder="Please select simulation area"
          >
            <el-option label="Allegheny County, PA" value=42003></el-option>
            <el-option label="Indiana, PA" value="42063"></el-option>
            <el-option label="Westmoreland County, PA" value="42129"></el-option>
            <el-option label="Bedford County, PA" value="42009"></el-option>
            <el-option label="Blair County, PA" value="42013"></el-option>
            <el-option label="Bucks County, PA" value="42017"></el-option>
            <el-option label="Cambria County, PA" value="42021"></el-option>
            <el-option label="Fayette County, PA" value="42051"></el-option>
            <el-option label="Jefferson County, PA" value="42065"></el-option>
            <el-option label="Lebanon County, PA" value="42075"></el-option>
           <!--  <el-option label="Bethel County, CA" value="bejing"></el-option>
            <el-option label="Hillsborough County, FL" value="bjing"></el-option>
            <el-option label="Touisset County, MA" value="beijg"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.days"
            placeholder="100"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Start Date"  :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="2012-06-01" suffix-icon="el-icon-date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Number of Diseases"  :label-width="formLabelWidth">
             <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
            ></el-input-number> -->
        <!-- </el-form-item> -->
        <el-form-item label="Transmissibility" :label-width="formLabelWidth">
          <el-input
            v-model="form.influenza_transmissibility"
            placeholder="1.0"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        
        
        <el-form-item label="Sick Stay Home Prob" :label-width="formLabelWidth">
          <el-input
            v-model="form.sick_day_prob"
            placeholder="0.5"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        
       
      </el-form>
      </el-tab-pane>
      <el-tab-pane label="Advanced" name="second">
      <el-form :model="form">
        <el-form-item label="Run Name" :label-width="formLabelWidth">
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Location" :label-width="formLabelWidth">
          <el-select
            v-model="form.fips"
            placeholder="Please select simulation area"
          >
            <el-option label="Allegheny County, PA" value=42003></el-option>
            <el-option label="Indiana County, PA" value="42063"></el-option>
            <el-option label="Westmoreland County, PA" value="42129"></el-option>
            <el-option label="Bedford County, PA" value="42009"></el-option>
            <el-option label="Blair County, PA" value="42013"></el-option>
            <el-option label="Bucks County, PA" value="42017"></el-option>
            <el-option label="Cambria County, PA" value="42021"></el-option>
            <el-option label="Fayette County, PA" value="42051"></el-option>
            <el-option label="Jefferson County, PA" value="42065"></el-option>
            <el-option label="Lebanon County, PA" value="42075"></el-option>
           <!--  <el-option label="Bethel County, CA" value="bejing"></el-option>
            <el-option label="Hillsborough County, FL" value="bjing"></el-option>
            <el-option label="Touisset County, MA" value="beijg"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.days"
            placeholder="100"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Start Date"  :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="2012-06-01" suffix-icon="el-icon-date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Number of Diseases"  :label-width="formLabelWidth">
             <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
            ></el-input-number> -->
        <!-- </el-form-item> -->
        <el-form-item label="Transmissibility" :label-width="formLabelWidth">
          <el-input
            v-model="form.influenza_transmissibility"
            placeholder="1.0"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="School Closure Policies">
          <el-radio-group v-model="form.school_closure_policy" >
            <el-radio label="none" model-value="none"></el-radio>
            <el-radio label="global" model-value="global"></el-radio>
            <el-radio label="individual"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="School Closure Duration"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.school_closure_duration"
            @change="handleChange"
            :min="1"
            :max="100"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Sick Stay Home Prob" :label-width="formLabelWidth">
          <el-input
            v-model="form.sick_day_prob"
            placeholder="0.5"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Enable Hospital" >
        <el-switch v-model="value1"> </el-switch>
        </el-form-item> -->
        <el-form-item label="Enable School Summer Break">
          <el-switch v-model="form.school_summer_schedule"> </el-switch>
        </el-form-item>
        <el-form-item
          label="Office Size"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.office_size"
            @change="handleChange"
            :min="5"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Travel">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
        <el-form-item
          label="Travel Distance Min"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.min_travel_distance"
            @change="handleChange"
            :min="100"
            :max="200"
          ></el-input-number>
        </el-form-item>
      </el-form>
      </el-tab-pane>
      <el-tab-pane label="Master" name="third">
      <el-form :model="form">
        <el-form-item label="Run Name" :label-width="formLabelWidth">
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Location" :label-width="formLabelWidth">
          <el-select
            v-model="form.fips"
            placeholder="Please select simulation area"
          >
            <el-option label="Allegheny County, PA" value=42003></el-option>
            <el-option label="Indiana, PA" value="42063"></el-option>
            <el-option label="Westmoreland County, PA" value="42129"></el-option>
            <el-option label="Bedford County, PA" value="42009"></el-option>
            <el-option label="Blair County, PA" value="42013"></el-option>
            <el-option label="Bucks County, PA" value="42017"></el-option>
            <el-option label="Cambria County, PA" value="42021"></el-option>
            <el-option label="Fayette County, PA" value="42051"></el-option>
            <el-option label="Jefferson County, PA" value="42065"></el-option>
            <el-option label="Lebanon County, PA" value="42075"></el-option>
           <!--  <el-option label="Bethel County, CA" value="bejing"></el-option>
            <el-option label="Hillsborough County, FL" value="bjing"></el-option>
            <el-option label="Touisset County, MA" value="beijg"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="Duration" :label-width="formLabelWidth">
          <el-input
            v-model="form.days"
            placeholder="100"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Start Date"  :label-width="formLabelWidth">
            <el-input v-model="form.name" placeholder="2012-06-01" suffix-icon="el-icon-date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Number of Diseases"  :label-width="formLabelWidth">
             <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
            ></el-input-number> -->
        <!-- </el-form-item> -->
        <el-form-item label="Transmissibility" :label-width="formLabelWidth">
          <el-input
            v-model="form.influenza_transmissibility"
            placeholder="1.0"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="School Closure Policies">
          <el-radio-group v-model="form.school_closure_policy" >
            <el-radio label="none" model-value="none"></el-radio>
            <el-radio label="global" model-value="global"></el-radio>
            <el-radio label="individual"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="School Closure Duration"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.school_closure_duration"
            @change="handleChange"
            :min="1"
            :max="100"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Sick Stay Home Prob" :label-width="formLabelWidth">
          <el-input
            v-model="form.sick_day_prob"
            placeholder="0.5"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Enable Hospital" >
        <el-switch v-model="value1"> </el-switch>
        </el-form-item> -->
        <el-form-item label="Enable School Summer Break">
          <el-switch v-model="form.school_summer_schedule"> </el-switch>
        </el-form-item>
        <el-form-item
          label="Office Size"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.office_size"
            @change="handleChange"
            :min="5"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Enable Travel">
          <el-switch v-model="form.enable_travel"> </el-switch>
        </el-form-item>
        <el-form-item
          label="Travel Distance Min"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.min_travel_distance"
            @change="handleChange"
            :min="100"
            :max="200"
          ></el-input-number>
        </el-form-item>
        <el-form-item
          label="school classroom size"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.school_classroom_size"
            @change="handleChange"
            :min="100"
            :max="200"
          ></el-input-number>
        </el-form-item>

        <el-form-item
          label="Probability of showing symptoms"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_probability_of_symptoms"
            placeholder="1.0"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Community distance"
          :label-width="formLabelWidth"
        >
          <el-input-number
            v-model="form.community_distance"
            @change="handleChange"
            :min="20"
            :max="100"
          ></el-input-number>
        </el-form-item>

        <el-form-item
          label="Community probability"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.community_prob"
            placeholder="0.1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="asymptomatic patients infectivity"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_asymp_infectivity"
            placeholder="0.5"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="incubation period median"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_incubation_period_median"
            placeholder="1.9"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Incubation period dispersion"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_incubation_period_dispersion"
            placeholder="1.51"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Symptoms duration median"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_symptoms_duration_median"
            placeholder="5.0"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="Symptoms duration dispersion"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_symptoms_duration_dispersion"
            placeholder="1.5"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="Enable face mask usage">
          <el-switch v-model="form.enable_face_mask_usage"> </el-switch>
        </el-form-item>

        <el-form-item
          label="face mask transmission efficacy"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_face_mask_transmission_efficacy"
            placeholder="0.26"
            autocomplete="off"
          ></el-input>
        </el-form-item>

         <el-form-item
          label="face mask susceptibility efficacy"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_face_mask_susceptibility_efficacy"
            placeholder="0.26"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="Enable hand washing">
          <el-switch v-model="form.enable_hand_washing"> </el-switch>
        </el-form-item>

        <el-form-item
          label="hand washing transmission efficacy"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_hand_washing_transmission_efficacy"
            placeholder="0.21"
            autocomplete="off"
          ></el-input>
        </el-form-item>

         <el-form-item
          label="hand washing susceptibility efficacy"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.influenza_hand_washing_susceptibility_efficacy"
            placeholder="0.21"
            autocomplete="on"
          ></el-input>
        </el-form-item>
      
      </el-form>
      </el-tab-pane>
      </el-tabs>
      <div class="demo-drawer__footer">
        <!-- <el-button @click="cancelForm">Cancel</el-button> -->
        <el-button
          type="primary"
          @click="open"
          :loading="loading"
          >{{ loading ? "Submitting ..." : "Submit" }}</el-button
        >
      </div>
    </div>
    <!-- <el-button type="text" @click="open">Click to open the Message Box</el-button> -->
  </el-drawer>
</template>

<script>
import {getCurrentInstance} from "vue";
export default {
  name: "NewRunDrawer",
  props: {
    // 标题
    title: {
      type: String,
      default: "标题",
    },
  },
  data() {
    const { proxy } = getCurrentInstance() 
    return {
      // 是否打开
      drawer: false,
      loading: false,
      activeName: "first",
      proxy,
      form: {
        key: "",
        fips: "",
        days: 100,
        influenza_transmissibility: 1.0,
        school_closure_policy: "none",
        school_closure_duration: 1,
        sick_day_prob: 0.5,
        school_summer_schedule: 0,
        office_size: 50,
        enable_travel: 0,
        min_travel_distance: 100,
        school_classroom_size: 40,
        influenza_probability_of_symptoms: 0.67,
        community_distance: 20,
        community_prob: 0.1,
        home_neighborhood_prob: 0.5,
        influenza_asymp_infectivity: 0.5,
        influenza_incubation_period_median: 1.9,
        influenza_incubation_period_dispersion: 1.51,
        influenza_symptoms_duration_median: 5.0,
        influenza_symptoms_duration_dispersion: 1.5,
        enable_face_mask_usage: 0,
        face_mask_compliance: 1,
        days_to_wear_face_masks: 2,
        influenza_face_mask_transmission_efficacy: 0.26,
        influenza_face_mask_susceptibility_efficacy: 0.26,
        enable_hand_washing: 0,
        hand_washing_compliance: 1,
        influenza_hand_washing_transmission_efficacy: 0.21,
        influenza_hand_washing_susceptibility_efficacy: 0.21,
        influenza_face_mask_plus_hand_washing_transmission_efficacy: 0.33,
        influenza_face_mask_plus_hand_washing_susceptibility_efficacy: 0.33,
      },
      formLabelWidth: "80px",
      timer: null,

      
    };
  },
  methods: {
    cancelForm() {
      this.loading = false;
      this.drawer = false;
      clearTimeout(this.timer);
    },
    logger() {
        console.log(this.form)
    },
    confirm() {
      // if (this.value.length!=0 && this.value2.length!=0) {
      let run_property = this.form
      console.log(run_property)
      this.proxy.$axios.post(this.proxy.$backend +'/addrun/', run_property).then(response => (console.log(response)))
        console.log(run_property);
      location.reload()
      // }
      // else{
      //   console.log("Please specify properties for graph to add!");
      // }
      // 
    },
    open() {
        this.$alert('Submit job to the server? It may take few minutes, refresh later', 'Notice', {
          confirmButtonText: 'Submit!',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
            if (action == 'confirm') {
              this.confirm()
            } 
            
          }
        });
      }
  },
};
</script>