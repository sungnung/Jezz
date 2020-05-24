import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


if ('serviceWorker' in navigator && (process.env.NODE_ENV === 'production'||process.env.NODE_ENV === 'development'  )) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

export default router


