<template>
  <div>
    <h2 class="title">
      消费汇总信息
    </h2>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">消费次数</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{cnt}}</el-col>
    </el-row>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">消费总人(次)</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{Math.abs(Math.round(total/100))}}</el-col>
    </el-row>

    <div style="margin-top:30px;">
      <router-link to='/'>
        <i class="el-icon-back"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cardNo: '',
      cnt: '',
      total: ''
    }
  },
  computed: {
    cardStore () {
      return this.$store.state.cardNO
    }
  },
  created () {
    this.getSummary()
  },
  methods: {
    getSummary () {
      this.cardNo = this.cardStore
      this.axios.get('/card/' + this.cardNo + '/summ')
        .then(({ data }) => {
          if (data && data.ret === 0) {
            this.cnt = data.data[0].cnt
            this.total = data.data[0].total
          } else {
            console.log('后台获取数据错误')
          }
        })
    }
  }
}
</script>

<style scoped>
  .title{
    background-color: aliceblue;
  }
  .content {
    border-bottom: 1px solid #dcdfe6;
    text-align: left;
    padding: 10px 0;
    font-size: 14px;
  }
</style>
