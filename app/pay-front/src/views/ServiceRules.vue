<template>
<div>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>机场贵宾厅服务细则：
      <el-button style="float: right; padding: 3px 0" type="text">贵宾专享</el-button>
    </span>
  </div>
  <div class="text item">
    <span  class="rule">
      一、服务内容
    </span>
    <span class="rule">
      晋商银行<strong style="color:red">机场贵宾卡、白金卡持卡</strong>人尊享每年山西武宿机场贵宾出行及随行总计<strong style="color:red">12</strong>次的机场贵宾厅服务。
    </span>
  </div>
  <div class="text item">
    <span class="rule">
     二、使用方法
    </span>
    <span class="rule">
您前往指定机场贵宾厅后，向贵宾厅前台礼宾员出示您的卡片，礼宾员通过机场专用POS核销您的服务次数。
    </span>
  </div>
  <div class="text item">
    <span class="rule">
     三、服务范围
     </span>
    <span class="rule">
1、专属休息室（区）。
2、专属进站通道。
3、免费休闲。专属贵宾室（区）内免为贵宾提供电视、电脑、报刊、杂志等休闲娱乐设备。
4、免费茶点。专属贵宾室（区）免费为贵宾客户提供饮料、茶水及简单食品。
<strong>服务周期内剩余可使用的贵宾厅的服务权益解释权归晋商银行所有，详情可致电：95105588</strong>
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

<style>
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
    width: 380px;
  }
</style>
