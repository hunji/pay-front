<template>
  <div>
    <div>
      <img src="../assets/head.jpg" style="margin-bottom:5px;">
    </div>
     <el-card class="box-card">
        <el-row class="content">
          <el-col :span="1" style="text-align:left">
            <img src="../assets/1.jpg" style="width:100px;">
          </el-col>
          <el-col :span="5" style="text-align:left">
            <span style="color:#d00707">客户信息</span>
          </el-col>
        </el-row>
       <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">卡号</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{cardNo}}</el-col>
      </el-row>
      <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">剩余次数</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{Math.abs(Math.round(ye/100))}}</el-col>
      </el-row>
      <el-row :gutter="20" class="content">
        <el-col :offset="2" :span="6" style="text-align:left">状态</el-col>
        <el-col :offset="6" :span="8" style="text-align:right">{{statusMsg}}</el-col>
      </el-row>
    </el-card>
    <div style="height:20px;"></div>
    <el-card class="box-card" style="min-height: 400px;">
      <el-row class="content">
          <el-col :span="1" style="text-align:left">
            <img src="../assets/2.jpg" style="width:100px;">
          </el-col>
          <el-col :span="5" style="text-align:left">
            <span style="color:#d00707">使用明细</span>
          </el-col>
      </el-row>
      <el-row class="content" style="border-bottom: 1px solid #d00707; ">
        <el-col :offset="2" :span="8" style="text-align:left">服务时间</el-col>
        <el-col :offset="1" :span="4" style="text-align:center">次数</el-col>
        <el-col :offset="1" :span="6" style="text-align:right">服务详情</el-col>
      </el-row>
      <el-row class="content" v-for="item in this.dataList" v-bind:key="item.xtgzh" style="border-bottom: 1px solid #ebeef5; ">
        <el-col :offset="2" :span="8" style="text-align:left">{{item.jyrq}}</el-col>
        <el-col :offset="1" :span="4" style="text-align:center">{{Math.abs(Math.round(item.fse/100))}}</el-col>
        <el-col :offset="1" :span="6" style="text-align:right">{{item.xtgzh}}</el-col>
      </el-row>
    </el-card>
    <div style="margin-top:20px;">
      <img src="../assets/bottom.jpg">
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
      status: '',
      dataList: []
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
            this.dataList = data.extend.detail
          } else {
            console.log('后台获取数据错误')
          }
        })
      // this.axios.get('/card/' + this.cardNo + '/detail')
      //   .then(({ data }) => {
      //     if (data && data.ret === 0) {
      //       this.dataList = data.data
      //     } else {
      //       console.log('后台获取数据错误')
      //     }
      //   })
    }
  }
}
</script>

<style scoped>
img {
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}
  .content {
    text-align: left;
    padding: 5px 0;
    font-size: 14px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 96%;
    margin-left: 2%;
  }
  .icon-list li i {
    color: #d00707;
  }
</style>
