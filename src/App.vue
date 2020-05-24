<template>
    <v-app>
      <v-content>
        <Jezz />
        <!-- <copyright /> -->
      </v-content>
    </v-app>
</template>

<script>
import Jezz from '@/components/Jezz.vue';
import copyright from '@/components/copyright.vue';

export default {
  name: 'App',

  components: {
    Jezz,
    copyright
  },
  
data () {
        return {
        }
    }
};

</script>

<style>
</style>