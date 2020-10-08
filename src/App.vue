<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <MainTabBar/>
  </div>
</template>

<script>
  import MainTabBar from '@components/content/MainTabBar'
  import NavBar from '@components/content/NavBar'

  export default  {
    components: {
      MainTabBar,
      NavBar
    },
    name :'App'
  }
</script>

<style lang="less">
  /*@import "~@assets/styles/custom.less";*/
body{
  background-color: @gray-4;
}
</style>
