<template>
  <div class="about">
  <el-row class="tac">
    <el-col :span="20" :offset="2">
      <img alt="Vue logo" src="../assets/back.jpg">
      <div style="margin: 10px;"></div>
      <el-form :inline="true" label-position="left" class="demo-form-inline">
        <el-form-item label="请输入卡号:">
          <el-input v-model="cardNo" type="number"  prefix-icon="el-icon-search" @change="setCard()" placeholder="卡号"></el-input>
        </el-form-item>
      </el-form>
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-menu-item index="3"  @click="getRules()">
        <span>服务细则</span>
      </el-menu-item>
      <el-menu-item index="2" @click="getInfo()">
        <i class="el-icon-menu"></i>
        <span>账户信息查询</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <!-- <el-menu-item index="3"  @click="getSummary()">
       <i class="el-icon-tickets"></i>
        <span>消费汇总信息</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item> -->
      <el-menu-item index="4"  @click="getDetail()">
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
  computed: {
    cardStore () {
      return this.$store.state.cardNO
    }
  },
  mounted () {
    this.cardNo = this.cardStore
  },
  methods: {
    getInfo () {
      if (this.checkData()) {
        this.$router.push({ path: 'info' })
      }
    },
    getSummary () {
      if (this.checkData()) {
        this.$router.push({ path: 'summary' })
      }
    },
    getDetail () {
      if (this.checkData()) {
        this.$router.push({ path: 'details' })
      }
    },
    getRules () {
      this.$router.push({ path: 'rules' })
    },
    setCard () {
      this.$store.commit('changeCard', this.cardNo)
    },
    checkData () {
      if (this.cardNo.length === 0) {
        this.$notify({
          title: '警告',
          message: '卡号不能为空',
          type: 'warning',
          showClose: false
        })
        return false
      } else {
        return true
      }
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
