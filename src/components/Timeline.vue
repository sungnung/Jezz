<template>
    <div>
        <v-timeline align-top dense>
            <v-timeline-item v-for="item in timeline" :color="color_by_type(item)" :icon="item.icon" :key="item.pk">
                <v-card flat class="pt-1" @click="OPEN_history(item)">
                    <v-col cols="3" class="caption">
                        <strong :style="item.is_done ? 'text-decoration:line-through;color:grey;' : ''">{{item.time}}</strong>
                    </v-col>
                    <v-col>
                        <strong :style="item.is_done ? 'text-decoration:line-through;color:grey;' : `color:${color_by_type(item)}`">{{item.type}}</strong>
                        <div :style="item.is_done ? 'text-decoration:line-through;color:grey;' : ''" class="caption mb-2">
                            <!-- <v-icon v-show="item.icon">{{item.icon}}</v-icon> -->
                            {{item.title}}
                            <v-btn fab x-small outlined :color="color_by_type(item)" v-if="item.place">{{item.place}}</v-btn>
                        </div>
                        <v-avatar v-if="item.is_may&&!item.is_done">
                            <v-img :src="may"></v-img>
                        </v-avatar>
                       <!--  <v-icon color="success" v-show="item.is_may&&!item.is_dani&&!item.is_done">mdi-clover</v-icon> -->
                        <v-icon small color="pink" v-show="item.is_may&&item.is_dani&&!item.is_done">mdi-heart-outline</v-icon>
                        <v-avatar v-if="item.is_dani&&!item.is_done">
                            <v-img :src="dani"></v-img>
                        </v-avatar>
                        <!-- <v-icon color="deep-orange" v-show="!item.is_may&&item.is_dani&&!item.is_done">mdi-fire</v-icon> -->
                    </v-col>
                    <!-- <v-col cols="3" class="caption" v-if="item.is_done">
                        <v-btn :color="color_by_type(item)" outlined @click="OPEN_history(item)">history</v-btn>
                    </v-col> -->
                </v-card>
            </v-timeline-item>
        </v-timeline>
        <v-dialog v-model="History.dialog" width="100%">
            <template v-slot:activator="{ on }">
                <v-btn color="red lighten-2" dark v-on="on" v-show="false">
                    Click Me
                </v-btn>
            </template>
              <v-card>
                <v-card-title :class="`deep-purple--text headline ${History.color}`" primary-title>
                    <v-icon v-show="History.icon">{{History.icon}}</v-icon> {{History.title}}
                </v-card-title>
                <v-carousel hide-delimiter-background show-arrows-on-hover>
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
                    pk:0,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Ready',
                    time: '9-10 AM',
                    hour: 10,
                    title:'슝슝~',
                    icon:'mdi-airplane-takeoff',
                    place:0,
                    is_done:false,
                    is_may:true,
                    is_dani:true,
                    src_list:[0, 1, 2, 3]
                },
                {
                    pk:-1,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Ready',
                    time: '10:30 AM',
                    hour:11,
                    title:'붕붕이 대여',
                    icon:'mdi-car-sports',
                    place:0,
                    is_done:false,
                    is_may:false,
                    is_dani:true,
                    src_list:[]
                },
                {
                    pk:1,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Meal',
                    time: '11 AM',
                    hour:12,
                    title:'백리향 (갈치/고등어구이/제육볶음)',
                    icon:'mdi-food-variant',
                    place:1,
                    is_done:false,
                    is_may:true,
                    is_dani:true,
                    src_list:[0, 1, 2, 3]
                },
                {
                    pk:3,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Activity',
                    time: '12-13 PM',
                    hour:13,
                    title:'드라이브: 용담해안도로',
                    icon:'mdi-car-traction-control',
                    place:2,
                    is_done:false,
                    is_may:false,
                    is_dani:true,
                    src_list:[0, 1, 2, 3, 4, 5, 6]
                },
                {
                    pk:4,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Dessert',
                    time: '12 PM',
                    hour:13,
                    title:'베이커리 : 빽다방 베이커리',
                    icon:'mdi-baguette',
                    place:3,
                    is_done:false,
                    is_may:true,
                    is_dani:false,
                    src_list:[0, 1, 2, 3, 4, 5]
                },
                {
                    pk:5,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Tour',
                    time: '13 - 16 PM',
                    hour:14,
                    title:'협재해변',
                    icon:'mdi-beach',
                    place:4,
                    is_done:false,
                    is_may:true,
                    is_dani:true,
                    src_list:[0, 1, 2, 3, 4]
                },
                {
                    pk:6,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Tour',
                    time: '16 - 18 PM',
                    hour:16,
                    title:'금오름',
                    icon:'mdi-image-filter-hdr',
                    place:5,
                    is_done:false,
                    is_may:true,
                    is_dani:true,
                    src_list:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                },
                {
                    pk:7,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Tour',
                    time: '20-21 PM',
                    hour:21,
                    title:'서귀포 올레시장',
                    icon:'mdi-basket-outline',
                    place:8,
                    is_done:false,
                    is_may:true,
                    is_dani:false,
                    src_list:[0, 1, 2, 3]
                },
                {
                    pk:8,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Meal',
                    time: '20 - 22 PM',
                    hour:18,
                    title:'뽈살집',
                    icon:'mdi-food-steak',
                    place:6,
                    is_done:false,
                    is_may:true,
                    is_dani:false,
                    src_list:[0, 1, 2, 3]
                },
                {
                    pk:9,
                    year:2020,
                    month:5,
                    day:28,
                    type: 'Accomodation',
                    time: ' 22PM',
                    hour:20,
                    title:'오션 팰리스호텔 (Check In)',
                    icon:'mdi-bed-outline',
                    place:7,
                    is_done:false,
                    is_may:false,
                    is_dani:true,
                    src_list:[0]
                }
            ],

            second_timeline: [
                {
                    pk:10,
                    year:2020,
                    month:5,
                    day:29,
                    type: 'Activity',
                    time: '11 - 12 PM',
                    hour:12,
                    title:'쇠소깍 (카약)',
                    icon:'mdi-sail-boat',
                    place:10,
                    is_done:false,
                    is_may:true,
                    is_dani:true,
                    src_list:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                },
                {
                    pk:11,
                    year:2020,
                    month:5,
                    day:29,
                    type: 'Meal',
                    time: '13 - 14 PM',
                    hour:14,
                    title:'한라전복 (전복뚝배기)',
                    icon:'mdi-pasta',
                    place:11,
                    is_done:false,
                    is_may:true,
                    is_dani:false,
                    src_list:[0, 1, 2, 3, 4]
                },
                {
                    pk:12,
                    year:2020,
                    month:5,
                    day:29,
                    type: 'Tour',
                    time: '15 - 16 PM',
                    hour:16,
                    title:'송악산',
                    icon:'mdi-image-filter-hdr',
                    place:12,
                    is_done:false,
                    is_may:false,
                    is_dani:true,
                    src_list:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                },
                {
                    pk:13,
                    year:2020,
                    month:5,
                    day:29,
                    type: 'Accomodation',
                    time: '16 PM',
                    hour:17,
                    title:'롯데시티호텔 (Check In)',
                    icon:'mdi-bed-outline',
                    place:16,
                    is_done:false,
                    is_may:true,
                    is_dani:false,
                    src_list:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                },
                {
                    pk:14,
                    year:2020,
                    month:5,
                    day:29,
                    type: 'Meal',
                    time: '18 - 20 PM',
                    hour:20,
                    title:'더육정육식당',
                    icon:'mdi-cow',
                    place:13,
                    is_done:false,
                    is_may:false,
                    is_dani:true,
                    src_list:[0, 1, 2, 3, 4, 5, 6]
                },
                {
                    pk:15,
                    year:2020,
                    month:5,
                    day:29,
                    type: 'Meal',
                    time: '22 PM',
                    hour:23,
                    title:'한치물회',
                    icon:'mdi-fish',
                    place:15,
                    is_done:false,
                    is_may:true,
                    is_dani:false,
                    src_list:[0, 1]
                },
            ],

            third_timeline:[
                {
                    pk:16,
                    year:2020,
                    month:5,
                    day:30,
                    is_birthday:true,
                    type: 'Meal',
                    time: '9 AM',
                    hour:10,
                    title:'롯데시티호텔 조식뷔폐',
                    icon:'mdi-food-fork-drink',
                    place:16,
                    is_done:false,
                    is_may:true,
                    is_dani:true,
                    src_list:[0, 1, 2, 3]
                },
                {
                    pk:17,
                    year:2020,
                    month:5,
                    day:30,
                    is_birthday:true,
                    type: 'Tour',
                    time: '11 - 15 PM',
                    hour:16,
                    title:'자유시간',
                    icon:'mdi-account-star',
                    place:0,
                    is_done:false,
                    is_may:true,
                    is_dani:true,
                    src_list:[0, 1, 2, 3, 4, 5, 6, 7, 8]
                },
                {
                    pk:18,
                    year:2020,
                    month:5,
                    day:30,
                    is_birthday:true,
                    type: 'Ready',
                    time: '15:30 PM',
                    hour:17,
                    title:'붕붕이 반납',
                    icon:'mdi-car',
                    place:0,
                    is_done:false,
                    is_may:false,
                    is_dani:true,
                    src_list:[]
                },
                {
                    pk:19,
                    year:2020,
                    month:5,
                    day:30,
                    is_birthday:true,
                    type: 'Ready',
                    time: '17 PM',
                    hour:18,
                    title:'슝슝...',
                    icon:'mdi-airplane-landing',
                    place:0,
                    is_done:false,
                    is_may:true,
                    is_dani:true,
                    src_list:[]
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

            if(this.day === 1) temp = this.first_timeline
            else if(this.day === 2) temp = this.second_timeline
            else if(this.day === 3) temp = this.third_timeline

            return temp
        }
    },
    methods:{
        // Functions.``
        OPEN_history(item){
            if(!item.src_list.length) return ''

            this.History.dialog = true
            this.History.title = item.title
            this.History.day = this.day
            this.History.pk = this.pk
            this.History.src_list =[]
            item.src_list.forEach(src=>{
                this.History.src_list.push(require(`@/assets/img/${item.pk}_${src}.jpeg`))
            })


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
        passed(items){
            let temp = items
            var now = new Date()
            var date = null


            temp.forEach(item=>{

                date = new Date(item.year, item.month-1, item.day, item.hour, 0, 0);
                item.is_done = date < now
            })

            return temp
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