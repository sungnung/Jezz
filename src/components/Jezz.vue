<template>
    <div>
        <v-card class="overflow-hidden" flat>
            <v-app-bar absolute :color="color" dark shrink-on-scroll elevate-on-scroll prominent scroll-target="#scrolling-techniques" style="z-index:10">
                <v-toolbar-title :class="'title_font' ">{{Title.text}}
                    <span v-if="days===0">&#128518</span>
                    <span v-else-if="days===1">&#1F60E</span>
                    <span v-else-if="days===2">&#128540</span>
                    <span v-else-if="days===3">&#1F60D</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
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
            }
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
                case 1: return {text:'1st Day', icon:'&#1F60E', color:'teal--text text--accent-4'}
                case 2: return {text:'2nd Day', icon:'&#128540', color:'pink--text text--accent-4'}
                case 3: return {text:'3rd Day', icon:'&#1F60D', color:'indigo--text text--accent-4'}
            }
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
    }   
};

</script>

<style>
.title_font {
    /*font-family: 'Oswald', sans-serif;*/
    font-family: 'Open Sans Condensed', sans-serif;
}
</style>