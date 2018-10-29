import Vue from 'vue'

/*---import whole element ui  start */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*---import whole element ui  end   */

import App from './App.vue'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
