<template>
    <div class="dialog" v-if="flag">
      <div class="cover">
          <div class="dialogMain">
              <div class="title"><span><slot name="title">标题</slot></span><span @click="cancel()"><svg t="1635064348732" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4191" width="18" height="18"><path d="M671.830688 511.699001l319.059377-319.059377c43.945914-43.945914 43.945914-115.583774 0-159.529688-43.945914-43.945914-115.583774-43.945914-159.529688 0l-319.059377 319.059377-319.059377-319.059377c-43.945914-43.945914-115.583774-43.945914-159.529688 0-43.945914 43.945914-43.945914 115.583774 0 159.529688l319.059377 319.059377-319.059377 319.059377c-43.945914 43.945914-43.945914 115.583774 0 159.529688 43.945914 43.945914 115.583774 43.945914 159.529688 0l319.059377-319.059377 319.059377 319.059377c43.945914 43.945914 115.583774 43.945914 159.529688 0 43.945914-43.945914 43.945914-115.583774 0-159.529688L671.830688 511.699001z" p-id="4192"></path></svg></span></div>
              <div class="content"><div><span>账号:</span><el-input v-model="inputname" placeholder="请输入用户名" id="username"></el-input></div>
              <div><span>密码:</span><el-input v-model="inputpassword" placeholder="请输入密码" id="password"></el-input></div></div>
              <div class="footer"><el-button @click="cancel">取消</el-button><el-button id="ok" @click="ok_btn">确定</el-button> </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
     flag:{
         type:Boolean,
         default:false
     },
  
    },
    data(){
        return{
            inputname:"",
            inputpassword:"",
        }
    },
    methods:{
      cancel(){
         let flag=!true;
          this.$emit("flag",flag)
      },
      ok_btn(){
        let flag=!true;
          let username=document.getElementById("username").value;
          let password=document.getElementById("password").value;
          let obj={
              username:username,
              password:password,
              objflag:flag,
          }
         this.$emit("dialogObj",obj)
      }
    },
}
</script>
<style lang="less" scoped>
.dialog{
    position: relative;
    font-size: 1rem;
    color: black;
}
.cover{
    background: rgba(0,0,0, 0.5);
    position: fixed;
    z-index: 200px;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.dialogMain{
    position: fixed;
    z-index: 201;
    width: 40rem;
    height: 20rem;
    display: flex;
    top:30%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-self: center;
    box-shadow: 5px 5px 5px black;
    background: whitesmoke;

}
.title{
    width: 100%;
    
    height: 2.5rem;
    line-height:2.5rem ;
    position: relative;
    border-bottom: solid 0.8px lightgray;
    span:nth-child(1){
        margin: 0 1rem;
        font-size: 1.3rem;
        float: left;
    }
       span:nth-child(2){
        float: right;
        margin: 0rem 1rem;
        font-size: 1.3rem;
    }
}

.content{
     width: 100%;
    height:auto;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    
    div{
        display: flex;
        flex-direction: row;
        line-height: 2rem;
        
    }
    span{
     width: 4rem;
     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
     margin: 0.6rem;
     font-size:1rem ;
    }
}
.footer{
    width: 100%;
   
     height:3rem;
     line-height: 3rem;
     border-top:solid 0.6px lightgray ;
     button{
         float: right;
         margin: 0.2rem;
     }
}
</style>