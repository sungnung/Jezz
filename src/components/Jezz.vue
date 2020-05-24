<template>
   <div>
     <v-app-bar
      app
      :color="color"
        flat
        dark
    >
      <!-- <v-toolbar-title :class="Title.color + ' font-weight-bold' ">{{Title.text}}</v-toolbar-title> -->
      <v-toolbar-title :class="'title_font' ">{{Title.text}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark>
        <v-icon>mdi-map</v-icon>
      </v-btn>
    </v-app-bar>
        
        <Preapare v-if="days===0"/>
        <Timeline :day="days" v-else/>

      <v-tabs
      v-model="days"
        style="position: absolute; bottom: 0px;"
        background-color="white"
        :color="color"
        centered

      >
        <v-tab>Prepare</v-tab>
        <v-tab>1st</v-tab>
        <v-tab>2nd</v-tab>
        <v-tab>3rd</v-tab>

      </v-tabs>
   </div>
</template>

<script>
import Preapare from '@/components/Preapare.vue';
import Timeline from '@/components/Timeline.vue';


export default {
    name: 'Jezz',

    components: {
        Preapare,
        Timeline
    },

    data () {
        return {
            date: new Date,
            days:0,
        }
    },
    computed :{
        is_xs(){
            return this.$vuetify.breakpoint.xsOnly
        },
        color () {
            switch (this.days) {
                case 0: return 'primary accent-4'
                case 1: return 'teal accent-4'
                case 2: return 'pink accent-4'
                case 3: return 'deep-purple accent-4'
            }
        },
        Title () {
            switch (this.days) {
                case 0: return {text:'Preparation', color:'primary--text text--accent-4'}
                case 1: return {text:'1st Day :)', color:'teal--text text--accent-4'}
                case 2: return {text:'2nd Day:)', color:'pink--text text--accent-4'}
                case 3: return {text:'3rd Day :)', color:'indigo--text text--accent-4'}
            }
        }
    },
    watch :{
    },
    destroyed() {
    },
    created () {
    },
    methods:{
        // Jezz API.
    }   
};

</script>

<style>
.title_font {
    /*font-family: 'Oswald', sans-serif;*/
    font-family: 'Open Sans Condensed', sans-serif;
}
</style>