<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="getData()">按钮</el-button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    getData () {
      this.msg = this.axios.get(process.env.VUE_APP_BASE_API + 'captcha.jpg?uuid=eef86454-533f-4505-860f-2dac78787453')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
