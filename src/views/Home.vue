<template>
  <div class="home">
    <div class="itemContent">
      <el-button type="success" @click="openDialog">弹框按钮</el-button>
    </div>
    <div class="itemContent">
      <viewpager :viewpager-obj="viewpagerdata"></viewpager>
    </div>
    <div class="itemContent"></div>
    <div class="itemContent"></div>
    <div class="itemContent"></div>
    <div class="itemContent"></div>
    <div class="itemContent"></div>
    <div class="itemContent"></div>
    <my_dialog :flag="flag" @flag="getFlag" @dialogObj="getDialogObj"
      ><span slot="title">登录</span><span>我就是内容</span></my_dialog
    >
  </div>
</template>
<script>
import my_dialog from "../components/myDialog"
import viewpager from "../components/viewpager"
export default {
  name: 'Home',
  components: {
  my_dialog,
  viewpager
  }
,
  data(){
    return{
      flag:false,
      dialog:{
      username:"",
      password:"", 
      },
     viewpagerdata:{
            imgList:[require("../assets/imgs/viewpagerIMG/20201201-3020.png"),require("../assets/imgs/viewpagerIMG/20201202-3021.png"),require("../assets/imgs/viewpagerIMG/20201203-3022.png"),require("../assets/imgs/viewpagerIMG/20201205-3024.png")]
            ,title:["图片1","图片2","图片3","图片4"]
      }
    }
  },
   mounted(){
   
      
  },
  methods:{
openDialog(){
  this.flag=true;
},
getFlag(val){
  this.flag=val;
},
getDialogObj(val){
  console.log(val)
 this.dialog.username=val.username;
 this.dialog.password=val.password;
 this.flag=val.objflag;
 console.log(this.dialog)
}
  }

}
</script>
<style lang="less" scoped>
.home {
  position: relative;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.itemContent {
  width: 45%;
  height: 30rem;
  background: #666666;
  color: #333333;
  border: solid 0.2rem gray;
  box-shadow: 10px 10px 10px lightgray;
  margin: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>