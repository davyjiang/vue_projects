<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <app-article  :title="title" :author="author" :date="date" :content="content" :share-times="shareTimes"></app-article>
      </div>
    </div>
  </div>
</template>

<script>
export default {  //In a simple file component, 'export default' must be in there.
  data(){
      return {
          title: 'This is an article',
          author: 'Davy Jiang',
          date: new Date(),
          //date: (new Date()).toLocaleString(),  //this will display date and local time
          content: 'This content is from app.vue.',
          shareTimes: 1
      }
  }
}
</script>
