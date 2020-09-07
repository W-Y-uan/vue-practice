<template>
  <section>
    <!--轮播图-->
    <div class="swipe-wrapper">
      <mt-swipe :auto="2000" ref="swipeWrapper">
        <mt-swipe-item class="swip-item-1 item"><img src="https://gw.alicdn.com/tfs/tps/TB1YTkBOpXXXXbLaXXXXXXXXXXX-1280-520.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class="swip-item-2 item"><img src="https://gw.alicdn.com/tfs/tps/TB1pre1OFXXXXaGXXXXXXXXXXXX-1280-520.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class="swip-item-3 item"><img src="https://gw.alicdn.com/tfs/tfs/TB1.Zy6OFXXXXbhXpXXXXXXXXXX-1280-520.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>

    <!--电影布局-->
    <ul class="filmList">
      <li v-for="(itemFilm,index) in filmList" :key="index">
        <div>
          <p class="filmImg">
            <img :src="hostName+itemFilm.poster" :alt="hostName+itemFilm.poster" />
          </p>
          <div class="filmText">
            <router-link class="filmLink" :to="{name:'movie',params:{hid:index}}">
              <h3 class="towc">{{itemFilm.showName}}</h3>
              <span>{{itemFilm.remark}}</span>
              <p class="mt6 towc">{{itemFilm.highlight}}</p>
              <p class="mt6 towc">{{itemFilm.leadingRole}}</p>
            </router-link>
            <button>购买</button>
          </div>
        </div>
        <div class="carnival">
          <p>1212五折狂欢</p>
          <p class="towc">1212五折狂欢123wsdfghjkxcvgbh</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default{
    data(){
      return{
        cityCode:"bj",
        filmList:[],
        hostName:"http://img1.tbcdn.cn/tfscom/"
      }
    },
    methods:{
      getFilm(cityCode){
        const ERROR_OK=0;
        var url="/api/movie/hot/?city="+cityCode;
        const _this=this;
        this.axios.get(url).then(res=>{
          if(res.data.errno===ERROR_OK){
            _this.filmList=res.data.data.data.returnValue;
            console.log(res.data.data.data.returnValue);
          }
        });
      }
    },
    created() {
      this.getFilm(this.cityCode);
    }
  }
</script>

<style scoped>
  .swipe-wrapper{
    width: 100%;
    height: 45vmin;
  }
  .filmList{
    padding-left: 10px;
  }
  .filmList li{
    border-bottom: 1px solid #D9D9D9;
    margin: 20px 0;
  }
  .filmList li div{
    display: flex;
  }
  .filmList li>div>.filmImg{/*子元素选择器,选择第一个li下面的第一个div的.filmImg*/
    width: 65px;
    height: 90px;
    border: 1px solid #ccc;
  }
  .filmText{/*filmImg已经固定大小,则.filmText flex: 1会占满剩余的宽度*/
    flex: 1;
    margin-left: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #D9D9D9;
  }

  /* .filmList li p{
    overflow: hidden;
  } */
  .filmList li .filmLink{/*button已经固定大小,则.filmLink flex: 1会占满剩余的宽度*/
    flex: 1;
    width: 0;
  }
  .filmList li button{
    width: 45px;
    height: 24px;
    border: 1px solid red;
    border-radius: 3px;
    background: #fff;
    color: red;
    margin: auto 20px;
  }
  .carnival{
    display: flex;
    margin-left: 75px;
    padding: 10px 0;
  }
  .carnival p{
    flex: 1;
  }
  .carnival p:first-child{
    border-right: 1px solid #D9D9D9;
    color: #f60;
  }
  .carnival p:last-child{
    padding-left: 10px;
    /* width: 0; */
  }

</style>
