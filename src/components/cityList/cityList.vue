<template>
  <section class="hotCityList">
    <div class="cityList" ref="wrapper">
      <ul>
        <li>
          <span>热门</span>
          <p>北京</p>
          <p>上海</p>
          <p>广州</p>
        </li>

        <li v-for="(item,index) in hotCity" :key="index">
          <span>{{index}}</span>
          <p v-for="(itemCity,index) in item" :key="index">{{itemCity.regionName}}</p>
        </li>
      </ul>
    </div>

    <ul class="cityCode">
      <li>
        <span>热门</span>
        <p v-for="(item,index) in hotCity" :key="index">{{index}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
  //引入滑动条
  import BScroll from "better-scroll"
  export default{
    data(){
      return{
        hotCity:[],
        cityList:[]
      }
    },
    created() {
      //获取热门城市数据
      const getUrl="/api/movie/city";
      const ERROR_OK=0;
      //定义作用域(回调函数作用域变化)
      var _this=this;
      this.axios.get(getUrl).then(function(res){
        if(res.data.errno===ERROR_OK)//请求成功
        _this.hotCity=res.data.data.data.returnValue;
        // console.log(_this.hotCity);
      });
    },
    mounted () {
      //即定时器 20ms
      this.$nextTick(() => {
        //$refs绑定元素
        //console.log(this.scroll);
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            //开启点击事件 默认为false
            click: true
          });
          console.log(this.scroll)
        } else if (!this.$refs.wrapper) {
          console.log("false");
          return;
        } else {
          this.scroll.refresh();
          console.log(this.scroll)
        }
      })
    }
  }
</script>

<style scoped>
  .hotCityList{
    display: flex;
    height: 100%;
  }
  .hotCityList .cityList{
    flex: 1;
    text-align: left;
    border-right: 1px solid #D9D9D9;
    padding-right: 30px;
    background: #fff !important;
    display: fixed;
  }
  .hotCityList .cityList li span{
    display: block;
    background: #e9e9e9;
    padding-left: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  .hotCityList .cityList li p{
    padding-left: 20px;
  }
  .hotCityList .cityCode{
    width: 50px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
