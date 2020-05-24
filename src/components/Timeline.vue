<template>
    <v-timeline align-top dense>
        <v-timeline-item v-for="item in timeline" :color="color_by_type(item)" small>
            <v-row class="pt-1">
                <v-col cols="3" class="caption">
                    <strong :style="item.is_done ? 'text-decoration:line-through;color:grey;' : ''">{{item.time}}</strong>
                </v-col>
                <v-col>
                    <strong  :style="item.is_done ? 'text-decoration:line-through;color:grey;' : `color:${color_by_type(item)}`">{{item.type}}</strong>
                    <div :style="item.is_done ? 'text-decoration:line-through;color:grey;' : ''" class="caption mb-2">
                    {{item.title}}
                     <v-btn fab x-small outlined :color="color_by_type(item)">{{item.place}}</v-btn>
                </div>
                    <v-avatar v-if="item.is_may&&!item.is_done">
                        <v-img :src="may"></v-img>
                    </v-avatar>
                    <v-avatar v-if="item.is_dani&&!item.is_done">
                        <v-img :src="dani"></v-img>
                    </v-avatar>
                </v-col>
                 <v-col cols="3" class="caption" v-if="item.is_done">
                    <v-btn :color="color_by_type(item)" outlined>history</v-btn>
                </v-col>
            </v-row>
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
            may:require('@/assets/img/may.png'),
            dani:require('@/assets/img/dani.png'),
            first_timeline: [
                {
                    type: 'Ready',
                    time: '9-10 AM',
                    title:'비행기 탑승',
                    icon:'mdi-airplane',
                    place:10,
                    is_done:true,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Ready',
                    time: '10:30 AM',
                    title:'렌트카 대여',
                    icon:'mdi-car',
                    place:10,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Activity',
                    time: '11:30',
                    title:'드라이브: 용담해안도로',
                    icon:'mdi-airplane',
                    place:10,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Dessert',
                    time: '12:00',
                    title:'베이커리',
                    icon:'mdi-airplane',
                    place:10,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Tour',
                    time: '13:00',
                    title:'협재해변',
                    icon:'mdi-airplane',
                    place:10,
                    is_done:false,
                    is_may:true,
                    is_dani:true
                },
                {
                    type: 'Accomodation',
                    time: '2000',
                    title:'비행기 탑승',
                    icon:'mdi-airplane',
                    place:10,
                    is_done:false,
                    is_may:true,
                    is_dani:true
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