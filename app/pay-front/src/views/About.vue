<template>
  <div class="about">
    <span>{{ balance }}</span>
    <ul>
      <li v-for="test in testData" :key="test.uniquekey">
        <p>{{test.author_name}} {{test.date}}</p>
        <img :src="test.thumbnail_pic_s">
        <span>{{test.title}}</span>
        <span>{{test.url}}</span>
      </li>
    </ul>
  <el-row class="tac">
    <el-col :span="20" :offset="2" class="content">
      <img alt="Vue logo" src="../assets/back.jpg">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"> 
      <el-menu-item index="2" @click="getBalance()">
        <i class="el-icon-menu"></i>
        <span>账户信息查询</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item index="3"  @click="getHistoryData()">
       <i class="el-icon-tickets"></i>
        <span>交易明细查询</span>
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
      balance: '',
      historyData: [],
      testData: []
    }
  },
  methods: {
    getBalance () {
      this.balance = '当前余额为' + 20
    },
    getHistoryData () {
      this.historyData = [
        {
          id: 1,
          msg: '1msg'
        },
        {
          id: 2,
          msg: '2msg'
        }
      ]
      this.axios.get('/api/index??type=top&key=fad630a594f82346e9142ba8a33bb5b6')
        .then(({ data }) => {
          if (data && data.result.stat === '1') {
            this.testData = data.result.data
          }
        })
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
