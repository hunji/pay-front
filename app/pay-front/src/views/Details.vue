<template>
  <div>
    <h2 class="title">
       交易明细
    </h2>
    <el-form label-position="left" label-width="100px">
      <el-form-item label="账号">
        {{cardNo}}
      </el-form-item>
    </el-form>
    <el-row>
      <el-button style="width:100%;" type="primary">查询</el-button>
    </el-row>
    <el-collapse accordion>
      <el-collapse-item v-for="item in this.dataList" v-bind:key="item.xtgzh">
        <template slot="title">
            <i class="el-icon-time"></i> {{item.jyrq}}
            <span style="margin-left:40%">消费次数:{{Math.abs(Math.round(item.fse/100))}}</span>
        </template>
        <div>结算批次    {{item.jspc}}</div>
        <div>终端号      {{item.tid}}</div>
        <div>商户号：    {{item.tshxxid}}</div>
        <div>系统跟踪号  {{item.xtgzh}}</div>
        <div>终端流水号：{{item.zdlsh}}</div>
      </el-collapse-item>
    </el-collapse>
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
      dataValue1: '',
      dataValue2: '',
      dataList: []
    }
  },
  computed: {
    jsbzMsg: function () {
      if (this.status === '0') {
        return '未结算'
      } else if (this.status === '1') {
        return '已经结算'
      } else {
        return '未知状态'
      }
    },
    cardStore () {
      return this.$store.state.cardNO
    }
  },
  created () {
    this.getDetails()
  },
  methods: {
    getDetails () {
      this.cardNo = this.cardStore
      this.axios.get('/card/' + this.cardNo + '/detail')
        .then(({ data }) => {
          if (data && data.ret === 0) {
            this.dataList = data.data
          } else {
            console.log('后台获取数据错误')
          }
        })
    }
  }
}
</script>

<style>
  .title{
    background-color: aliceblue;
  }
  .el-row{
    margin-top: 5px;
  }
</style>
