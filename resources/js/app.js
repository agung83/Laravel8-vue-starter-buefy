
import Vue from 'vue'

import App from './app.vue'
import Buefy from 'buefy';
import router from './router/index'


Vue.use(Buefy)

const app = new Vue({
    el: '#app',
    components: { App },
     router,
});
