<template>
  <section>

    <div class="hotcity">
      <span @click="cityBool=true">北京</span>
      <i class="iconfont icon-arrow"></i>
    </div>

    <!--城市列表-->
    <div class="citylist" v-show="cityBool">
      <div class="checkHot mint-1px-b">选择热门<i class="iconfont icon-chushaixuanxiang" @click="cityBool=false"></i></div>
      <v-cityList></v-cityList>
    </div>

  </section>
</template>

<script>
  import citylist from '@/components/cityList/cityList'
  export default{
    data(){
      return{
        cityBool:false
      }
    },
    components:{
      'v-cityList':citylist
    }
  }
</script>

<style scoped>
  .citylist{
    height:100%;
    width:100%;
    z-index: 1000;
    position:fixed;
    top:0;
    background:#fff;
  }
  .citylist .checkHot{
    position: relative;
    z-index: 10000;
    font-size: 22px;
    font-weight: bold;
    background:#fff;
  }
  .citylist .checkHot i{
    position: absolute;
    right: 20px;
  }
</style>
