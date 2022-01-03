<template>
  <el-container>
    <el-header> <TopNavBar/> </el-header>
    <el-container class="mainContainer">
      <app-main/>
    </el-container>
  </el-container>
</template>

<script>
import TopNavBar from './components/TopNavBar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  data() {
    return {
    }
  },
  components: {
    TopNavBar,
    AppMain
  },
  mounted() {
  },
  watch: {
    $route(to, from) {
      this.path = to.path
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-header {
    position: relative;
    width: 100%;
    padding: 0;
  }
  /*.el-aside {*/
  /*  display: block;*/
  /*  position: absolute;*/
  /*  left: 0;*/
  /*  top: 60px;*/
  /*  bottom: 0;*/
  /*}*/
  .mainContainer {
    position: absolute;
    width: 100%;
    // side的高度
    /*left: 200px;*/
    // header的高度
    top: 60px;
    bottom: 0;
    /*overflow-y: scroll;*/
  }

</style>
