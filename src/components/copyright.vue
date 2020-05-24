<template>
    <v-row align="center" justify="center">
    <footer class="grey_color utilstext">
        <small class="copyright">© <b>May x Dani</b> {{ year }} - <cite>2nd Project</cite></small>
    </footer>
</v-row>
</template>

<script>

export default {
    name: 'copyright',
    components: {
    },
    data () {
        return {
          year: 2020
        }
    },
    computed: {
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