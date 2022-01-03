<template>
    <el-main>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    </el-main>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
</style>

<style lang="scss">
</style>
