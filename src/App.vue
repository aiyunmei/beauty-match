<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  }
}
</script>

<style>
  /*750的设计稿，html  font-szie：28.125px*/
  html {
    font-family: "Microsoft yahei";
  }

  body, textarea, input, select, option {
    color: #333;
    font-family: "Hiragino Sans GB", "Microsoft Yahei", tahoma, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  body, h1, h2, h3, h4, h5, h6, blockquote, ol, ul, dl, dd, p, textarea, input, select, option, form {
    margin: 0;
    padding: 0;
  }

  ol, ul, textarea, input, option, th, td {
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-size: 100%;
  }

  article, aside, details, figcaption, figure, footer, header, menu, nav, section {
    display: block;
  }

  ul, ol {
    list-style-type: none;
  }

  .clearfix:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  /*.clearfix {*zoom:1;}*/
  .clear {
    clear: both;
    height: 0;
    overflow: hidden;
  }

  /* ios默认文本框阴影 */
  input, textarea {
    -webkit-appearance: none;
  }

  /* 低版本安卓文本框层级问题 */
  input:focus {
    -webkit-user-modify: read-write-plaintext-only;
  }

  fieldset, img {
    border: 0;
  }

  a {
    text-decoration: none;
  }

  a, textarea, input {
    outline: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }

  textarea {
    overflow: auto;
    resize: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
  }
  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
