<template>
  <div>
    <div>
      <img src="../assets/head.jpg">
    </div>
    <div>
      <img src="../assets/background.jpg">
    </div>
    <el-row class="tac">
    <el-col :span="20" :offset="2">
      <div style="margin: 10px;"></div>
      <el-form :inline="true" label-position="left" class="demo-form-inline">
        <el-form-item >
          <el-input v-model="cardNo" @keyup.native="number" prefix-icon="el-icon-date" @change="setCard()" placeholder="请输入卡号"></el-input>
        </el-form-item>
      </el-form>
       <div style="margin: 30px;"></div>
       <el-button type="danger"  @click="getInfo()" round style="width:240px;">查询</el-button>

       <div style="margin: 50px;"></div>
       <div @click="getRules()">
         <img src="../assets/1.jpg" style="width:30px;">
         <span >贵宾客户专享权益</span>
       </div>
      <!-- <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-menu-item index="3"  @click="getRules()">
        <span>贵宾客户专享权益</span>
      </el-menu-item>
      <el-menu-item index="2" @click="getInfo()">
        <i class="el-icon-menu"></i>
        <span>贵宾客户信息查询</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item index="4"  @click="getDetail()">
       <i class="el-icon-date"></i>
        <span>贵宾厅使用记录&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
    </el-menu> -->
    </el-col>
    </el-row>
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
    number () {
      // eslint-disable-next-line
      this.cardNo = this.cardNo.replace(/[^\.\d]/g, '')
    },
    getInfo () {
      if (this.checkData()) {
        this.$router.push({ path: 'search' })
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

<style scoped>
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
