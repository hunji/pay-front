<template>
<div>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>贵宾客户专享权益
      <el-button style="float: right; padding: 3px 0" type="text">贵宾专享</el-button>
    </span>
  </div>
  <div class="text item">
    <span  class="rule">
      一、服务内容
    </span>
    <span class="rule">
      晋商银行白金信用卡持卡人尊享每年总计<strong style="color:red">6</strong>次武宿机场贵宾厅服务，晋商银行钻石信用卡持卡人尊享每年总计<strong style="color:red">12</strong>次武宿机场贵宾厅服务。
    </span>
  </div>
  <div class="text item">
    <span class="rule">
     二、使用方法
    </span>
    <span class="rule">
      持卡人前往晋商银行专属机场贵宾厅后，向贵宾厅前台礼宾员出示您的卡片，礼宾员通过机场专用POS核销您的服务次数。
    </span>
  </div>
  <div class="text item">
    <span class="rule">
     三、服务范围
     </span>
    <span class="rule">
       1、 专属休息室（区）。
    </span>
    <span class="rule">
        2、 专属进站通道。
    </span>
    <span class="rule">
       3、 免费休闲。专属贵宾室（区）内免为贵宾提供电视、电脑、报刊、杂志等休闲娱乐设备。
    </span>
    <span class="rule">
       4、 免费茶点。专属贵宾室（区）免费为贵宾客户提供饮料、茶水及简单食品。
    </span>
    <span class="rule">
       5、服务周期内剩余可使用的贵宾厅的服务权益解释权归晋商银行所有，详情可致电信用卡贵宾专线：<strong>400-666-5588</strong>
    </span>
  </div>
  </el-card>
  <div style="margin-top:30px;">
      <router-link to='/'>
        <i class="el-icon-back"></i>
      </router-link>
  </div>
</div>
</template>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 8px;
  }
  .rule {
    text-align: left;
    display:block;
  }
  .box-card {
    width: 90%;
    display:table;
    margin:0 auto;
  }
</style>
