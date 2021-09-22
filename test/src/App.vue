<template>
  <div id="nav" :style='conheight'>
  </div>
  <router-view/>
</template>

<script>
　　export default{
      data() {
        return {
          conheight: 0
        };
      },
　　　　created() {
        window.addEventListener('resize', this.getHeight);
        this.conheight = window.innerHeight + 'px';
     }
　　} 
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
}

#nav {
  padding: 0;
  margin: 0 auto;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
