import Vue from 'vue'
import App from './components/App.vue'     //This is a simple file component.
import Article from "./components/Article.vue"

Vue.component('app-article', Article);

new Vue({
  el: '#app',
  render: h => h(App)
})
