<template>
  <div>
    <h2>
      消费汇总信息
    </h2>
    <h4>已结算：</h4>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">消费次数</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{cnt1}}</el-col>
    </el-row>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">总金额(分)</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{total1}}</el-col>
    </el-row>

    <h4>未结算：</h4>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">消费次数</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{cnt2}}</el-col>
    </el-row>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">总金额(分)</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{total2}}</el-col>
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
      cnt1: '',
      total1: '',
      cnt2: '',
      total2: ''
    }
  },
  created () {
    this.getSummary()
  },
  methods: {
    getSummary () {
      this.cardNo = '1001011010000036'
      this.axios.get('/card/' + this.cardNo + '/summ')
        .then(({ data }) => {
          if (data && data.ret === 0) {
            if (data.data.length === 2) {
              this.cnt1 = data.data[0].cnt
              this.total1 = data.data[0].total
              this.cnt2 = data.data[1].cnt
              this.total2 = data.data[1].total
            }
          } else {
            console.log('后台获取数据错误')
          }
        })
    }
  }
}
</script>

<style>
  .content {
    border-bottom: 1px solid #dcdfe6;
    text-align: left;
    padding: 10px 0;
    font-size: 14px;
  }
</style>
