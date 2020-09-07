<template>
  <section>
    <div class="filmNav mint-1px-b">
      <v-city class="hotcity"></v-city>
      <div class="showfilm">
        <p @click="filmId=0" :class="{'cred':filmId===0}">正在热映</p>
        <p @click="filmId=1" :class="{'cred':filmId===1}">即将热映</p>
        <span :class="{'active':filmId===1}"></span>
      </div>
    </div>

    <!--正在热映-->
    <v-liveshow v-show="filmId===0"></v-liveshow>
    <!--即将热映-->
    <v-soonshow v-show="filmId===1"></v-soonshow>
  </section>

</template>

<script>
  import city from '@/components/city/city'
  import liveshow from '@/components/liveShow/liveShow'
  import soonshow from '@/components/soonShow/soonShow'
  export default{
    data(){
      return {
        filmId:0
      }
    },
    components:{
      'v-city':city,
      'v-liveshow':liveshow,
      'v-soonshow':soonshow
    }
  }
</script>

<style scoped="scoped">
  .filmNav{
    display: flex;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .filmNav .hotcity{/*组件占1份*/
    flex: 1;
  }
  /* .filmNav div:last-child{
    flex: 2;
  } */
  .filmNav .showfilm{/*showfilm占2份*/
    flex: 2;
    display: flex;
    position: relative;
  }
  .filmNav .showfilm p{
    flex: 1;/*其中每个p占1份*/
  }
  .filmNav .showfilm span{
    width: 40%;
    height: 2px;
    background: red;
    position: absolute;
    left: 5%;
    bottom: 0;
    transition: all 500ms;
  }
  .filmNav .showfilm .active{
    left: 55%;
  }
</style>
