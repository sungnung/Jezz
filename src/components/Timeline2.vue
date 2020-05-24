<template>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, i) in timeline" :key="i" :color="color_by_type(item)" :icon="item.icon" fill-dot>
            <v-card v-if="!item.is_done" :color="color_by_type(item)" dark>
                <v-card-title dense class="subheading">{{item.title}}</v-card-title>
                <v-card-text class="white--text justify-space-between">
                    {{item.time}}
                  <!--   <v-btn small color="white" class="mx-0" outlined @click="item.is_done=true">
                        done
                    </v-btn> -->
                    
                </v-card-text>
            </v-card>

            <v-expand-transition>
            <v-card v-show="item.is_done">
                <v-carousel height="200" :continuous="false" :cycle="cycle" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus">
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="display-3">{{ slide }} Slide</div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                <v-list two-line>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{item.type}}</v-list-item-title>
                            <v-list-item-subtitle>{{item.title}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-expand-transition>
        </v-timeline-item>
    </v-timeline>
</template>

<script>

export default {
    name: 'Timeline',
    components: {
    },
    props:{
        day:{
            type:Number,
            default:1,
        }
    },
    data () {
        return {
            first_timeline: [
                {
                    type: 'Ready',
                    time: '09:00',
                    title:'비행기 탑승',
                    icon:'mdi-airplane',
                    place:'',
                    is_done:false,
                },
                {
                    type: 'Ready',
                    time: '10:30',
                    title:'렌트카 대여',
                    icon:'mdi-car',
                    place:'',
                    is_done:false,
                },
                {
                    type: 'Activity',
                    time: '11:30',
                    title:'드라이브: 용담해안도로',
                    icon:'mdi-airplane',
                    place:'',
                    is_done:false,
                },
                {
                    type: 'Dessert',
                    time: '12:00',
                    title:'베이커리',
                    icon:'mdi-airplane',
                    place:'',
                    is_done:false,
                },
                {
                    type: 'Tour',
                    time: '13:00',
                    title:'협재해변',
                    icon:'mdi-airplane',
                    place:'',
                    is_done:false,
                },
                {
                    type: 'Accomodation',
                    time: '2000',
                    title:'비행기 탑승',
                    icon:'mdi-airplane',
                    place:'',
                    is_done:false,
                },
            ],

            // Temp
            colors: [
                  'green',
                  'secondary',
                  'yellow darken-4',
                  'red lighten-2',
                  'orange darken-1',
                ],
                cycle: false,
                slides: [
                  'First',
                  'Second',
                  'Third',
                  'Fourth',
                  'Fifth',
                ],
        }
    },
    computed: {
        timeline (){
            if(this.day === 1) return this.first_timeline
            else if(this.day === 2) return this.second_timeline
            else if(this.day === 3) return this.third_timeline
        }
    },
    methods:{
        // Utils
        color_by_type (item){
            if (item.is_done) return 'grey lighten-2'


            let items = {
                Ready:'success', // 준비

                Tour:'#B57082', // 관광
                Activity:'#D06380', // 체험
                Meal:'#ED4C00', // 식사

                Dessert:'#63453D', // 디저트
                Accomodation:'#2B242C', // 숙소
            }

            return items[item.type]

        }
    }
}
</script>

<style scoped>
footer {
  margin: auto;
  text-align: center;
  position: absolute;
  bottom: 10px;

}
</style>