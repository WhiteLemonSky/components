<template>
    <div class="container">
       
        <div class="main">  
         <div class="main-left" @click="mainleft"><svg t="1635087817235" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7399" width="25" height="25"><path d="M474.496 512l338.752-338.752-90.496-90.496L293.504 512l429.248 429.248 90.496-90.496z" p-id="7400" fill="#e6e6e6"></path></svg></div>
         <div class="main-right"  @click="mainright"> <svg t="1635088091108" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13277" width="25" height="25"><path d="M320 0 192 128l384 384-384 384 128 128 512-512L320 0z" p-id="13278" fill="#e6e6e6"></path></svg></div>
             <keep-alive>
             <ul >
                 <li v-for="(item,index) in viewpagerObj.imgList" :key="index" ><a><img width="100%" height="100%" style="object-fit:cover" :src="item"></a></li>
                 
             </ul>
                 </keep-alive>
         <div class="item">
         <ul @click="getLiID" >
         <li v-for="(item,index) in viewpagerObj.imgList" :key="index" :style="{backgroundImage:'url('+item+')'}" :id="index"></li>
         </ul>
         </div>
        </div>
    
    </div>
</template>
<script>
export default {
    props:{
        viewpagerObj:{
            type:Object
        }
    },
   
    data(){
        return{
         VPO:{},
         index:0,
         viewpagerTime:null,
         test:null,
        }
    },
    methods:{
      
        mainleft:function(){
            clearInterval(this.viewpagerTime);
            if(this.index==0){
                this.index=this.viewpagerObj.imgList.length-1;
               this.init()
            }else{
                this.index--
                this.init()
            }
           
              
        },
        mainright:function(){
            clearInterval(this.viewpagerTime);
             if(this.index==this.viewpagerObj.imgList.length-1){
                this.index=0;
                this.init()
            }else{
                this.index++
                this.init()
            }
      
        }
        ,
              init: function(){ 
                
                 var that=this;
                 if(that.viewpagerTime){
                     clearInterval(that.viewpagerTime)
                 }
                  that.test.style.transform="translate(-"+(that.index*30)+"rem)"
                 that.viewpagerTime=setInterval(()=>{
                 that.test.style.transform="translate(-"+(that.index*30)+"rem)"
                 
                  if(that.index++>=that.viewpagerObj.imgList.length-1){
                      that.index=0;

                  }
                   
             },3000) 
                
      } ,

      getLiID:function(e){
          this.index=e.target.getAttribute("id")
          this.test.style.transform="translate(-"+(this.index*30)+"rem)"
      }
    },
    watch:{
  
    },
    mounted(){
      
        this.test=document.querySelector(".main>ul");
        this.init();


    },
}
</script>
<style lang="less" scoped>
.main{
    width: 30rem;
    height: 20rem;
    background: transparent;
    background-size:contain ;
    background-position: center;
    box-shadow: 0.5rem  0.5rem 0.5rem black;
    border-radius: 1rem;
    position: relative;
    will-change: transform;
    overflow: hidden;
   
}
.main>ul{
    position: absolute;
      width: 100%;
     height:100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
   transition: transform 1s;
    li{
        flex: 0 0 30rem;
       width: 30rem;
       height:20rem;
       float: left;
       list-style-type: none;
          border-radius: 1rem;
      img{
             border-radius: 1rem;
      }
    }
}
.main-left{
    width: 1.5rem;
    height: 20rem;
    background: rgba(231, 230, 230, 0.253);
    border-top-left-radius:1rem ;
     border-bottom-left-radius:1rem ;
     float: left;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     z-index: 4;
     position: relative;
}
.main-right{
    width: 1.5rem;
    height: 20rem;
    background: rgba(231, 230, 230, 0.253);
    border-top-right-radius:1rem ;
     border-bottom-right-radius:1rem ;
    writing-mode: vertical-rl;
     float: right;
         display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     z-index: 4;
         position: relative;
     :hover{
         background: rgba(231, 230, 230, 0.815);
     }
}
.main-left:hover{
         background: rgba(231, 230, 230, 0.815);
     }
     .main-right:hover{
         background: rgba(231, 230, 230, 0.815);
     }
.item{
  
     position: absolute;
        bottom: 2rem;
        right: 4rem;
    li{
        width: 2rem;
        height: 2rem;
        background: skyblue;
        list-style-type: none;
        float: left;
        margin-left: 0.5rem;
        border-radius: 50%;
        background-size:contain ;
        background-position: center;
        box-shadow:  0.2rem  0.2rem  0.2rem rgba(0, 0, 0, 0.767);

       
    }
}
</style>