<template>
    <div>
        <button class="btn btn-primary" @click="share">Share to Wechat</button>
    </div>
</template>
<script>
    export default {
        methods : {
            share(){
                this.$emit("shared", {
                    name: 'davyjiang',
                    id: 12
                })
            }
        }
    }
</script>
