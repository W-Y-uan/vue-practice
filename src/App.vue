<template>
  <div id="app">
    <!--底部导航-->
    <v-fixnav></v-fixnav>
    <!--路由出口-->
    <router-view></router-view>
  </div>
</template>

<script>
import fixNav from '@/components/fixNav/fixNav'
export default {
  name: 'App',
  components:{
    'v-fixnav':fixNav
  }
}
</script>

<style>

</style>
