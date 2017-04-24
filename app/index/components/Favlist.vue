<template id="template-home">
  <div>
    <div v-for="n in 10">{{msg}}</div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'hello word'
            }
        }
    }
</script>
<style>
body {
    color: red;
}
html{
    /*background: #000*/
}
</style>