<template>
    <div class="card-body d-flex flex-column align-items-start">
      <h2 class="blog-post-title">{{title}}</h2>
      <p>Share times: {{shareTimes}}</p>
      <p class="mb-1 text-muted">Released : {{date | moment}}</p>
      <p class="lead">{{content}}</p>
      <a href="#">Continue reading</a>
      <app-author :author-name = "author"></app-author>
      <app-share @shared = "previousShare($event, 10)"></app-share>
    </div>
</template>

<script>
import moment from "moment";
import Author from "./Author.vue";
import Share from "./Share.vue";

export default {
    props : {
        title : {
            type : [String, Number],
            default : 'This is an article',
            required : true
        },
        author : {
            type : [String, Number],
            default : 'Davy Jiang',
            required : true
        },
        date : {
            type : [String],
            default : '',
            required : true
        },
        content : {
            type : [String],
            default : '',
            required : true
        },
        shareTimes : {
            type : [Number],
            default : 0,
            required : true
        },
    },
    filters : {
        moment : function(value){
            return moment(value).format('MMMM Do');
        }
    },
    components : {
        'app-author' : Author,
        'app-share' : Share
    },
    methods : {
        previousShare(event, number){
            console.log(event, number); //The event is from child component.
            this.shareTimes++;
        }
    }
}
</script>
