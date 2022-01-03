<template>
  <div id="home">
    <el-row><el-col :offset="3" :span="18">
      <div class="ui card" style="width: 100%">
        <div class="image" style="padding: 1em">
          <img :src="myAvatar" alt="" class="ui rounded image">
        </div>
        <div class="content">
          <a class="header">x1aY</a>
          <div class="meta">
            <span class="m-text">HHU研究生，家乡安徽广德</span>
          </div>
          <div class="description">
            <div class="ui attached segment my-shadow">
              <span class="m-text">记录学习生活中的点滴</span>
            </div>
            <div class="ui attached segment my-shadow">
              <div
                   class="ui my-blue basic left pointing label m-margin-tb-tiny"
                   v-for="myIcon in myIcons"
                   :key="myIcon">{{myIcon}}</div>
            </div>
          </div>
        </div>
        <div class="extra content">
          <p class="m-text">网页构建参考：
            <a
               target="_blank"
               v-for="reference in references"
               :key="reference.href"
               :href="reference.href">{{reference.person}}</a>
          </p>
        </div>
      </div>
    </el-col></el-row>
  <Footer/>
  </div>
</template>

<script>
import myAvatar from '@/assets/myAvatar.jpg'
import Footer from '@/layout/components/Footer'
export default {
  name: 'Home',
  components: { Footer },
  data() {
    return {
      myAvatar: myAvatar,
      myIcons: ['（ctrl）CV工程师', '强迫症', '摸鱼',
        'Java', 'Python', 'Vue',
        '黑魂3', '巫师3', '原神',
        '健身', '篮球', '肯德基',
        '...'],
      references: [{
        href: 'https://panjiachen.github.io/vue-element-admin-site/zh',
        person: 'panjiachen, ' }, {
        href: 'https://www.tcefrep.site',
        person: 'tcefrep'
      }]
    }
  },
  created() {
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
</style>
