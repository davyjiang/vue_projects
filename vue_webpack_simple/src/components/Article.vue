<template>
    <div class="card-body d-flex flex-column align-items-start">
      <h2 class="blog-post-title">{{title}}</h2>
      <div class="mb-1 text-muted">{{date | moment}}</div>
      <p class="lead">{{content}}</p>
      <a href="#">Continue reading</a>
      <app-author></app-author>
    </div>
</template>

<script>
import moment from "moment";
import Author from "./Author.vue";

export default {
    data(){
        return {
            title: 'This is an article',
            author: 'DavyJiang',
            date: new Date(),
            //date: (new Date()).toLocaleString(),  //this will display date and local time
            content: 'This is the content.'
        }
    },
    filters : {
        moment : function(value){
            return moment(value).format('MMMM Do');
        }
    },
    components : {
        'app-author' : Author
    }
}
</script>
