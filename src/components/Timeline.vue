<template>
    <div>
        <v-timeline align-top dense>
            <v-timeline-item v-for="item in timeline" :color="color_by_type(item)" small>
                <v-row class="pt-1">
                    <v-col cols="3" class="caption">
                        <strong :style="item.is_done ? 'text-decoration:line-through;color:grey;' : ''">{{item.time}}</strong>
                    </v-col>
                    <v-col>
                        <strong :style="item.is_done ? 'text-decoration:line-through;color:grey;' : `color:${color_by_type(item)}`">{{item.type}}</strong>
                        <div :style="item.is_done ? 'text-decoration:line-through;color:grey;' : ''" class="caption mb-2">
                            {{item.title}}
                            <v-btn fab x-small outlined :color="color_by_type(item)" v-if="item.place">{{item.place}}</v-btn>
                        </div>
                        <v-avatar v-if="item.is_may&&!item.is_done">
                            <v-img :src="may"></v-img>
                        </v-avatar>
                        <v-avatar v-if="item.is_dani&&!item.is_done">
                            <v-img :src="dani"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="3" class="caption" v-if="item.is_done">
                        <v-btn :color="color_by_type(item)" outlined @click="OPEN_history(item)">history</v-btn>
                    </v-col>
                </v-row>
            </v-timeline-item>
        </v-timeline>
        <v-dialog v-model="History.dialog">
            <template v-slot:activator="{ on }">
                <v-btn color="red lighten-2" dark v-on="on" v-show="false">
                    Click Me
                </v-btn>
            </template>
            <v-card>
                <v-card-title :class="`white--text headline ${History.color}`" primary-title>
                    {{History.title}}
                </v-card-title>
                <v-carousel height="400" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="(slide, i) in History.src_list" :key="i" :src="slide">
                    </v-carousel-item>
                </v-carousel>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :color="History.color" text @click="History.dialog = false">
                        close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
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
            may:require('@/assets/img/may.png'),
            dani:require('@/assets/img/dani.png'),
            first_timeline: [
                {
                    type: 'Ready',
                    time: '9-10 AM',
                    title:'슝슝~',
                    icon:'mdi-airplane',
                    place:0,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Ready',
                    time: '10:30 AM',
                    title:'붕붕이 대여',
                    icon:'mdi-car',
                    place:0,
                    is_done:false,
                    is_may:false,
                    is_dani:true
                },
                {
                    type: 'Meal',
                    time: '11 AM',
                    title:'백리향 (갈치구이, 흑돼지 제육)',
                    icon:'mdi-car',
                    place:1,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Activity',
                    time: '12-13 PM',
                    title:'드라이브: 용담해안도로',
                    icon:'mdi-airplane',
                    place:2,
                    is_done:false,
                    is_may:false,
                    is_dani:true
                },
                {
                    type: 'Dessert',
                    time: '12 PM',
                    title:'베이커리',
                    icon:'mdi-airplane',
                    place:3,
                    is_done:false,
                    is_may:true,
                    is_dani:false
                },
                {
                    type: 'Tour',
                    time: '13 PM',
                    title:'협재해변',
                    icon:'mdi-airplane',
                    place:4,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Tour',
                    time: '14 - 16 PM',
                    title:'마라도',
                    icon:'mdi-airplane',
                    place:5,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Meal',
                    time: '17 - 18 PM',
                    title:'서귀포 시 - 흑돼지',
                    icon:'mdi-airplane',
                    place:6,
                    is_done:false,
                    is_may:true,
                    is_dani:false
                },
                {
                    type: 'Accomodation',
                    time: '19 PM',
                    title:'오션 팰리스호텔 (Check In)',
                    icon:'mdi-airplane',
                    place:7,
                    is_done:false,
                    is_may:false,
                    is_dani:true
                },
                {
                    type: 'Tour',
                    time: '20-21 PM',
                    title:'서귀포 올레시장',
                    icon:'mdi-airplane',
                    place:8,
                    is_done:false,
                    is_may:true,
                    is_dani:false
                }
            ],

            second_timeline: [
                {
                    type: 'Dessert',
                    time: '10 AM',
                    title:'우드노트',
                    icon:'mdi-airplane',
                    place:9,
                    is_done:false,
                    is_may:false,
                    is_dani:true
                },
                {
                    type: 'Activity',
                    time: '11-12 PM',
                    title:'쇠소깍',
                    icon:'mdi-airplane',
                    place:10,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Meal',
                    time: '13-14 PM',
                    title:'한라전복 (전복뚝배기)',
                    icon:'mdi-airplane',
                    place:11,
                    is_done:false,
                    is_may:true,
                    is_dani:false
                },
                {
                    type: 'Tour',
                    time: '15-16 PM',
                    title:'새별오름',
                    icon:'mdi-airplane',
                    place:12,
                    is_done:false,
                    is_may:false,
                    is_dani:true
                },
                {
                    type: 'Accomodation',
                    time: '16 PM',
                    title:'롯데시티호텔 (Check In)',
                    icon:'mdi-airplane',
                    place:16,
                    is_done:false,
                    is_may:true,
                    is_dani:false
                },
                {
                    type: 'Meal',
                    time: '18-20 PM',
                    title:'탐라가든 (백돼지 생갈비, 삼겹살)',
                    icon:'mdi-airplane',
                    place:13,
                    is_done:false,
                    is_may:false,
                    is_dani:true
                },
                {
                    type: 'Meal',
                    time: '23 PM',
                    title:'모살물 (쥐치,고등어 회)',
                    icon:'mdi-airplane',
                    place:15,
                    is_done:false,
                    is_may:true,
                    is_dani:false
                },
            ],

            third_timeline:[
                {
                    type: 'Meal',
                    time: '9 AM',
                    title:'롯데시티호텔 조식뷔폐',
                    icon:'mdi-airplane',
                    place:16,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Tour',
                    time: '11-15 PM',
                    title:'자유시간',
                    icon:'mdi-airplane',
                    place:0,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Ready',
                    time: '15:30 PM',
                    title:'붕붕이 반납',
                    icon:'mdi-airplane',
                    place:0,
                    is_done:false,
                    is_may:false,
                    is_dani:true
                },
                {
                    type: 'Ready',
                    time: '17 PM',
                    title:'슝슝...',
                    icon:'mdi-airplane',
                    place:0,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
            ],

            History:{
                dialog:false,
                day:0,
            },
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
            let temp = []

            if(this.day === 1) temp = this.copy(this.first_timeline)
            else if(this.day === 2) temp = this.copy(this.second_timeline)
            else if(this.day === 3) temp = this.copy(this.third_timeline)

            return temp
        }
    },
    methods:{
        // Functions.
        OPEN_history(item){
            this.History.dialog = true
            this.History.day = this.day
            this.History.pk = this.pk
            this.History.src_list = [
                    require('@/assets/img/1.png'),
                    require('@/assets/img/2.png'),
                    require('@/assets/img/3.png')]

        },
        // Utils.
        color_by_type (item){
            if (item.is_done) return '#9E9E9E'


            let items = {
                Ready:'#4CAF50', // 준비

                Tour:'#B57082', // 관광
                Activity:'#D06380', // 체험
                Meal:'#ED4C00', // 식사

                Dessert:'#63453D', // 디저트
                Accomodation:'#2B242C', // 숙소
            }

            return items[item.type]

        },
        copy(items){
            return items
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