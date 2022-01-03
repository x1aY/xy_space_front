<template>
  <div id="topNavBar">
    <el-menu
        mode="horizontal"
        background-color="transparent"
        text-color="#FFFFFF"
        active-text-color="#FFFFFF"
        :default-active="activeMenu"
        router>

      <el-menu-item v-for="routeMeta in oneChildRouteMeta" :key="routeMeta.totalPath" :index="routeMeta.totalPath">
        <span>{{routeMeta.title}}</span>
        </el-menu-item>

      <el-menu-item v-if="token===undefined" class="userInfoMenuItem" index="/login/index">
        <span>登录/注册</span>
      </el-menu-item>

      <el-menu-item v-else class="userInfoMenuItem userAvatar" >
          <el-dropdown class="avatarDropDown">
            <div><img class="avatarImg" :src="avatar" alt="用户头像"/></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logout">
                <span style="display:block;">登出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import myAvatar from '@/assets/myAvatar.jpg'

export default {
  name: 'TopNavBar',
  data() {
    return {
      // token: 'undefined',
      // token: undefined,
      // name: 'xy',
      // avatar: myAvatar
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter(route => !route.hidden)
    },
    oneChildRouteMeta() {
      return this.routes.filter(this.oneShowingChildRouteFilter).map(route => route.children[0].meta)
    },
    activeMenu() {
      return this.$route.path
    },
    ...mapGetters([
      'name',
      'token',
      'avatar'
    ])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    oneShowingChildRouteFilter(route) {
      return route.children.length === 1 ||
        route.children.reduce((prev, currEle) => currEle.hidden === true ? prev : prev + 1,
          0) === 1
    }
  }
}
</script>

<style lang="scss" scoped>

  .el-menu-item:hover{
    background-color: transparent !important;
    span{
      color: darkorange;
      border-radius: 8px !important;
      box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06) !important;
      transition: all 0.3s;
    }
  }
  .userInfoMenuItem{
    float: right;
    .avatarDropDown{
      height: 100%;
      padding-top: 5px
    }
  }
  .userAvatar{
    line-height: 0;
    padding: 0 0 0 0;
    height: 60px;
    width: 75px;
    .avatarImg{
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }
  }
</style>
