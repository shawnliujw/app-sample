import Vue from 'vue'
import App from './App.vue'
import * as vConsole from 'vconsole';
new vConsole();
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
