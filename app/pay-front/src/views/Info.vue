<template>
  <div>
    <h2 class="title">
      贵宾客户信息查询
    </h2>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">卡号</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{cardNo}}</el-col>
    </el-row>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">剩余次数</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{Math.abs(Math.round(ye/100))}}</el-col>
    </el-row>
    <!-- <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">制卡日期</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{makecarddate}}</el-col>
    </el-row>
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">开卡日期</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{opencarddate}}</el-col>
    </el-row> -->
    <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">状态</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{statusMsg}}</el-col>
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
      ye: '',
      makecarddate: '',
      opencarddate: '',
      status: ''
    }
  },
  computed: {
    statusMsg: function () {
      if (this.status === '0') {
        return '正常'
      } else if (this.status === '1') {
        return '冻结'
      } else if (this.status === '2') {
        return '挂失'
      } else if (this.status === '3') {
        return '销户'
      } else if (this.status === '6') {
        return '空白卡'
      } else {
        return '未知状态'
      }
    },
    cardStore () {
      return this.$store.state.cardNO
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.cardNo = this.cardStore
      this.axios.get('/card/' + this.cardNo + '/info')
        .then(({ data }) => {
          if (data.data && data.ret === 0) {
            this.ye = data.data.ye
            this.makecarddate = data.data.makecarddate
            this.opencarddate = data.data.opencarddate
            this.status = data.data.status
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
