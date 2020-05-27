<template>
    <div>
        <v-card class="overflow-hidden" flat>
            <v-app-bar absolute :color="color" dark shrink-on-scroll elevate-on-scroll prominent scroll-target="#scrolling-techniques" style="z-index:10" :src="appImg">
                <v-toolbar-title :class="'title_font' ">{{Title.text}}
                    <span v-if="days===0">&#128518</span>
                    <span v-else-if="days===1">&#128526</span>
                    <span v-else-if="days===2">&#128536</span>
                    <span v-else-if="days===3">&#128525</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="OPEN_MAP()">
                    <v-icon>mdi-map</v-icon>
                </v-btn>
            </v-app-bar>
            <v-sheet id="scrolling-techniques" class="overflow-y-auto" :max-height="height">
                <v-container :style="`height: ${height}px; margin-top:130px;`">
                    <Preapare v-if="days===0" />
                    <Timeline :day="days" v-else />
                </v-container>
            </v-sheet>
        </v-card>
        <v-tabs v-model="days" style="position: absolute; bottom: 0px;" background-color="white" :color="color" centered>
            <v-tab>Prepare</v-tab>
            <v-tab>1st</v-tab>
            <v-tab>2nd</v-tab>
            <v-tab>3rd</v-tab>
        </v-tabs>

      <v-dialog
        v-model="Map_dialog"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
            v-show="false"
          >
            Click Me
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title
            :class="`white--text headline ${Map_Item.color}`"
            primary-title
          >
            {{Map_Item.title}}
          </v-card-title>

                        <v-img :src="JeJuMap"></v-img>
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :color="Map_Item.color"
              text
              @click="Map_dialog = false"
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
            days:1,
            window:{
                height:600,
                width:600,
            },
            Map_dialog:false,

            JeJuMap:require('@/assets/img/JeJuMap.png')
        }
    },
    computed :{
        height (){
            return this.window.height - (48)
        },
        is_xs (){
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
                case 0: return {text:'Preparation', icon:'&#128518', color:'primary--text text--accent-4'}
                case 1: return {text:'1st Day', icon:'&#128526', color:'teal--text text--accent-4'}
                case 2: return {text:'2nd Day', icon:'&#128536', color:'pink--text text--accent-4'}
                case 3: return {text:'3rd Day', icon:'&#128525', color:'indigo--text text--accent-4'}
            }
        },
        appImg(){
            return require(`@/assets/img/${this.days}.png`)
        },
        Map_Item (){
            return this.$store.state.Map_Item
        }
    },
    watch :{
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    created () {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    methods:{
        // Jezz API.
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },

        // Functions.
        OPEN_MAP(){
            this.Map_dialog = true
            this.$store.commit('SET_Map', {title:'Jeju Map',color:'primary'})
        }
    }   
};

</script>

<style>
.title_font {
    /*font-family: 'Oswald', sans-serif;*/
    font-family: 'Open Sans Condensed', sans-serif;
}
</style>