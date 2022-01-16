<template>
<div id="login" class="loginDiv">
  <div class="ui container">
    <div class="ui piled segment">
      <div class="ui top attached segment">
        <h2 class="ui center aligned header" v-text="blogTitle"/>
        <div class="ui horizontal link list">
          <div class="item">
            <img v-bind:src="myAvatar" class="ui avatar image" alt="用户头像">
            <div class="content"><a class="header">{{blogAuthor}}</a></div>
          </div>
          <div class="item"> <i class="calendar icon"></i> {{blogCreateTime}} </div>
        </div>
      </div>
      <div
        id="blogContent"
        style="padding:35px 20px 50px 20px"
        class="ui attached segment typo"
        v-html="htmlTest"
      />
      <div class="ui bottom attached segment">
        <img :src=myAvatar class="ui fluid rounded image" alt="文章封面">
      </div>
      <div class="ui attached positive message">
        <div class="ui list" >
          <div class="item">自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import myAvatar from '@/assets/myAvatar.jpg'
import Footer from '@/layout/components/Footer'

export default {
  name: 'BlogDetail',
  components: { Footer },
  data() {
    return {
      myAvatar,
      htmlTest: ''
    }
  },
  computed: {
    ...mapGetters([
      'blogId',
      'blogTitle',
      'blogAuthor',
      'blogAuthorAvatar',
      'blogCreateTime'
    ])
  },
  methods: {
  }
}
</script>

<style scoped>
@import "../../styles/typo.css";
@import "../../styles/animate.css";
.loginDiv{
  text-align: center;
  color: #ffffff;
}
.container{
  animation: main 1s;
}
</style>

