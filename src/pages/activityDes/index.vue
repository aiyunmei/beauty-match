<template>
  <div class="container">
    <img class='banner' src='../../../static/image/banner01.jpg'/>
    <div class="content">
      <h3 class="title">活动须知</h3>
      <ul class="des">
        <li class="item" v-for="(item,index) in content" :key="index">{{item}}</li>
      </ul>
      <video :src="video" class="video" controls poster="../../../static/image/banner02.jpg" objectFit="cover"></video>
      <div class="to-upload-btn" @click="toUpload">{{operateText}}</div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        // video: '',
        operateText: '上传视频',
        content: [
          '参加活动需要上传本人真实图像视频，要求清晰，视频长度10s-30s',
          '提交并通过审核传本人真实图像视频，要求清晰，视频长度10s-30s提交并通过审核传本人真实图像视频，要求清晰，视频长度10s-30s',
          '活动时间：参加活动需要上传本人真实图像视频，要求清晰，视频长度10s-30s',
          '参赛者录制视频内容参加活动需要上传本人真实图像视频，要求清晰，视频长度10s-30s',
          '活动奖励：提交并通过审核传本人真实图像视频，要求清晰，视频长度10s-30s提交并通过审核传本人真实图像视频，要求清晰，视频长度10s-30s'
        ]
      }
    },
    computed: {
      ...mapState(['video'])
    },
    mounted () {
    //  获取视频src和视频状态【未上传，审核中。。。】
    },
    methods: {
      toUpload () {
        const url = '../uploadVideo/main'
        wx.navigateTo({ url })
      }
    }
  }
</script>

<style scoped>
  @import "./index.css";
</style>
