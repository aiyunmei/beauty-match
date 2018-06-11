<template>
  <div class='container'>
    <img class='banner' src='../../../static/image/banner01.jpg'/>
    <div class='bonus-title'>
      <img class='icon' src='../../../static/image/bonus-icon.jpg'/><span>福利集结</span>
    </div>
    <div class='bonus-content'>
      <img src='../../../static/image/banner02.jpg'/>
      <div class='right'>
        <span class='title'>报名即可获得300元现金奖励!人气美人将瓜分100万奖金！</span>
        <span class='sign-up-btn' @click="toActivityDes">我要报名</span>
        <span class='to-yuedan-btn'>兼职赚钱来约单</span>
      </div>
    </div>
    <div class='range-title'>
      <img class='icon' src='../../../static/image/range-icon.jpg'/>
      <span class='rangeText'>魅力排行</span>
      <span class='toAll'>查看全部</span>
      <img class='allow-right' src='../../../static/image/arrow-right.png'/>
    </div>

    <div class='range-container'>
      <div class='range-warpper clearfix'>
        <div class='range-item' v-for="(item, index) in ranges" :key="index">
          <div class='pic'>
            <img class='bg' :src="item.bg"/>
            <img class='photo' :src="item.src"/><span>{{index + 1}}</span>
          </div>
          <span class='name'>{{item.name}}</span>
          <span class='value'>人气{{item.value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      ranges: [
        {
          name: '迷路的麋鹿',
          bg: '../../../static/image/crown01.png',
          src: '../../../static/image/pic01.jpg',
          value: 16652
        },
        {
          name: '夏天不太冷',
          bg: '../../../static/image/crown02.png',
          src: '../../../static/image/pic01.jpg',
          value: 15667
        },
        {
          name: '房东的猫',
          bg: '../../../static/image/crown03.png',
          src: '../../../static/image/pic01.jpg',
          value: 14356
        }
      ]
    }
  },

  methods: {
    toActivityDes () {
      const url = '../activityDes/main'
      wx.navigateTo({ url })
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style scoped>
  .clearfix::after{
    content:'.';
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .banner{
    width: 100%;
    height: 265px;
  }
  .bonus-title{
    padding: 32px 30px 16px 30px;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }
  .bonus-title .icon{
    width: 36px;
    height: 32px;
  }
  .bonus-title span{
    font-size: 28px;
    padding-left: 7px;
    color:#4a4a4a;
  }
  .bonus-content{
    box-sizing: border-box;
    width: 92%;
    margin-left: 4%;
    box-shadow: 0 5px 30px 0 #e0c9ff;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }
  .bonus-content .right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .bonus-content .right .title{
    width: 280px;
    font-size: 24px;
    line-height: 30px;
    color: #4a4a4a;
  }
  .bonus-content .right .sign-up-btn{
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    background-color: #fd6862;
    line-height: 45px;
    width: 227px;
    border-radius: 6px;
  }
  .bonus-content .right .to-yuedan-btn{
    color:#fd6862;
    line-height: 45px;
    text-align: center;
    background-color: #ffffff;
    width: 227px;
    border-radius: 6px;
    font-size: 24px;
    box-shadow: 0 4px 30px 0 #e0c9ff;
  }
  .bonus-content img{
    width: 320px;
    height: 220px;
    border-radius: 10px;
  }
  .range-title .icon{
    width: 36px;
    height: 32px;
    float:left;
  }
  .range-title{
    padding: 32px 30px 16px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }
  .range-title .rangeText{
    font-size: 28px;
    padding-left: 7px;
    color:#4a4a4a;
  }
  .range-title .allow-right{
    width: 12px;
    height: 22px;
    position: absolute;
    right: 30px;
  }
  .range-title .toAll{
    color: #505050;
    font-size: 24px;
    padding-right: 7px;
    position: absolute;
    right: 49px;
  }
  .range-container{
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
  }
  .range-container .range-warpper{
    position: relative;
    height: 250px;
    display: flex;
    align-items: center;
  }
  .range-warpper .range-item{
    padding: 11px 0 24px;
    box-sizing: border-box;
    width: 240px;
    height: 200px;
    box-shadow: 0 4px 30px 0 #e0c9ff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .range-warpper .range-item:nth-child(2){
    float: left;
  }
  .range-warpper .range-item:last-child{
    position: absolute;
    right: 0;
  }
  .range-warpper .range-item:first-child{
    transform: scale(1.25) translateX(-50%);
    position: absolute;
    left:50%;
    margin-left: 30px;
    z-index: 3;
    background-color: #ffffff;
  }
  .range-warpper .range-item .pic{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .range-warpper .range-item .pic .bg{
    width: 35px;
    height: 29px;
    position: relative;
    top: 13px;
    left: -21px;
    z-index: 2;
  }
  .range-warpper .range-item .pic .photo{
    width: 66px;
    height: 66px;
    position: relative;
  }
  .range-warpper .range-item .pic span{
    border-radius: 12px;
    background-color: #fd6862;
    color: #ffffff;
    font-size: 16px;
    line-height: 22px;
    position: absolute;
    bottom:0;
    right: 0;
    padding: 0 7px;
  }
  .range-warpper .range-item .name{
    font-size: 24px;
    color: #4a4a4a;
    padding-top: 12px;
    line-height: 38px;
    height: 38px;
    text-align: center;
  }
  .range-warpper .range-item .value{
    font-size: 19px;
    color:#9b9b9b;
    text-align: center;
  }
</style>
