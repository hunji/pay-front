<template>
  <div class="about">
  <el-row class="tac">
    <el-col :span="20" :offset="2" class="content">
      <img alt="Vue logo" src="../assets/back.jpg">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-menu-item index="2" @click="getInfo()">
        <i class="el-icon-menu"></i>
        <span>账户信息查询</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item index="3"  @click="getSummary()">
       <i class="el-icon-tickets"></i>
        <span>消费汇总信息</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item index="3"  @click="getDetail()">
       <i class="el-icon-date"></i>
        <span>消费明细查询</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
    </el-menu>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cardNo: '',
      historyData: [],
      testData: []
    }
  },
  methods: {
    getInfo () {
      this.$router.push({ path: 'info' })
    },
    getSummary () {
      this.$router.push({ path: 'summary' })
    },
    getDetail () {
      this.$router.push({ path: 'details' })
    }
  }
}
</script>

<style>
img {
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}
.el-menu-item{
  border: 1px solid gainsboro
}
.el-icon-arrow-right{
  margin-left:80px
}
</style>
