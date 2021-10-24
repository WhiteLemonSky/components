<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/">Home</router-link> 
      <router-link to="/">Home</router-link> 
      <router-link to="/">Home</router-link> 
      <router-link to="/">Home</router-link> 
      <router-link to="/">Home</router-link> 
      <router-link to="/">Home</router-link> 
      <router-link to="/">Home</router-link> 
      <router-link to="/">Home</router-link> 
      <router-link to="/">Home</router-link>                        
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
@maincolor:#666666;
*{
  padding: 0;
  margin: 0px;
}
#app {
  background: @maincolor;
  position: relative;
}
#nav {
  width: 90%;
  padding: 30px;
  margin: 0 auto;
  display: flex;
  a {
    font-weight: bold;
    color: #333333; 
    background: #CCCCCC;
    border: solid 0.1rem gainsboro;
    padding: 20px;
    text-decoration: none;
    flex: 1;
  }
  a:hover{
    background: #666666;
    color: #eff0f0;
  }
}
#nav a:nth-child(1){
  color: #0099CC;

}
</style>
