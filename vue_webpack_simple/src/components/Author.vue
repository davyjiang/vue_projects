<template>
  <div>
    <p>Written by {{authorName}} </p>
  </div>
</template>

<script>
export default {
    props : {
        authorName : {
            type : [String, Number],
            default : '',
            required : true
        }
    }
}
</script>

<style scoped>
    *{
        color : blue;
    }
</style>
