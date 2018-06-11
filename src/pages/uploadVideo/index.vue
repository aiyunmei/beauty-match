<template>
    <div class="upload-video">
      <div class="content">
        <video :src="video" class="video" controls poster="../../../static/image/poster.jpg" objectFit="cover"></video>
        <div class="select-video-btn" @click="selectVideo">选择本地相册</div>
        <div class="submit" @click="submit">提交</div>
        <p class="des">需知：包含微信，QQ，手机号，二维码，色情内容的视频会导致审核失败</p>
      </div>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    computed: {
      ...mapState(['video'])
    },
    methods: {
      ...mapMutations(['SET_VIDEO']),
      selectVideo () {
        let that = this
        wx.chooseVideo({
          success: function(res) {
            that.SET_VIDEO(res.tempFilePath)
          }
        })
      },
      submit () {
        const url = '../activityDes/main'
        wx.navigateTo({url})
      }
    }
  };
</script>

<style scoped>
  @import "./index.css";
</style>
