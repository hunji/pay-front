<template>
  <div class="about">
    <el-button  type="primary" @click="getBalance()">查询余额</el-button>
    <span>{{ balance }}</span>
    <br/>
    <el-button  @click="getHistoryData()">查询历史明细</el-button>
    <ul>
      <li v-for="test in testData" :key="test.uniquekey">
        <p>{{test.author_name}} {{test.date}}</p>
        <img :src="test.thumbnail_pic_s">
        <span>{{test.title}}</span>
        <span>{{test.url}}</span>
      </li>
    </ul>
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
