<template>
    <v-card class="">
   
        <v-text-field
          name="name"
          label="+ Type Stuffs"
          id="id"
          solo-inverted
          flat
          hide-details
          color="pirmaty"
          background-color="pirmaty"
          v-model="New_item_text"
          @keyup.native.enter="ADD_item(New_item_text)"
        ></v-text-field>
         <v-switch :label="is_May ? 'May' : 'Dani'" color="deep-purple" v-model="is_May" class="ml-2"></v-switch>
          <v-row class="ml-2">
            <v-btn text class="primary--text">ALL {{count.all}}</v-btn>
            <v-btn text class="grey--text">done {{count.done}}</v-btn>
            <v-btn text class="deep-orange--text">left {{count.left}}</v-btn>
          </v-row>

        <v-divider></v-divider>
          <v-list dense>
      <v-subheader>Todo</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="item.is_done= !item.is_done"
        >
          <v-list-item-icon>
            <v-icon v-if="item.is_done" color="grey">mdi-checkbox-marked</v-icon>    
            <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content :style="done_style(item.is_done)">
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <v-list-item-subtitle v-text="item.time"></v-list-item-subtitle>

          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-card>

</template>

<script>

export default {
    name: 'Preapare',
    components: {
    },
    data () {
        return { 
          New_item_text:'',
          is_May:true,

        }
    },
    computed: {
        count(){
            return this.counter()
        },
        items(){
            if(this.is_May) return this.$store.state.May_items
            return this.$store.state.Dani_items
        }
    },
    created () {
    },
    methods:{
        ADD_item(text){
            if (!text) return ''
            let duplecated = false
            this.items.forEach(item=>{
                if (item.text === text) duplecated=true
            })
            if (duplecated) return ''

            let time = new Date
            time = this.Format(time)

            if (this.is_May){
                this.$store.commit('ADD_May_item', {is_done:false,text:text,time:time})
            } else{
                this.$store.commit('ADD_Dani_item', {is_done:false,text:text,time:time})
            }
            this.New_item_text = ''
        },

        // Utils
        counter(){
            let all = this.items.length
            let done = this.items.filter(item=>{return item.is_done}).length

            return {all:all, done:done, left:all-done}
        },
        done_style(is_done){
            if(is_done) return 'text-decoration:line-through;color:grey;'
            return ''
        },
        Format(d){
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            var day = days[d.getDay()];
            var hr = d.getHours();
            var min = d.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }
            var ampm = "am";
            if( hr > 12 ) {
                hr -= 12;
                ampm = "pm";
            }
            var date = d.getDate();
            var month = months[d.getMonth()];
            var year = d.getFullYear();

            return `${month}, ${date} ${hr}:${min} ${ampm}`
        }
    }
}
</script>

<style scoped>

</style>