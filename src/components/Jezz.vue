<template>
   <div>
   </div>
</template>

<script>
export default {
    name: 'Jezz',

    components: {
    },

    data () {
        return {
            date: new Date,
        }
    },
    computed :{
        is_xs(){
            return this.$vuetify.breakpoint.xsOnly
        },
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
</style>