<template>
    <div>
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
                    <v-btn :color="color_by_type(item)" outlined @click="OPEN_history(item)">history</v-btn>
                </v-col>
            </v-row>
        </v-timeline-item>
    </v-timeline>

    <v-dialog
        v-model="History.dialog"
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
            :class="`white--text headline ${History.color}`"
            primary-title
          >
            {{History.title}}
          </v-card-title>

                        <v-img :src="History.src"></v-img>
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :color="History.color"
              text
              @click="History.dialog = false"
            >
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