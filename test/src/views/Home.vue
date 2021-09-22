<template>
  <div class="home"> 
      <div class="background">
        <div class="logo">
      <!-- <img src="../assets/6.png"> -->
      <img src="../assets/images/6.png">
        </div>

        <div class="menu01">
     <router-link to="/search" style="text-decoration: none;">蛋白质模型检索</router-link>
        </div>
    
        <div class="menu01">
    <router-link to="/show" style="text-decoration: none;">蛋白质聚类展示</router-link>
        </div>
   
        <div class="menu01">
    <router-link to="/calculate" style="text-decoration: none;">蛋白质计算展示</router-link>
        </div>
      </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  components: {},
});
</script>

<style>
/* 公共样式 */
body {font-size: 14px; font-family: "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "Hiragino Sans GB", "Source Han Sans CN Normal", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp","PingFangSC-Light", "PingFang SC", sans-serif; /*font-weight: lighter;*/ color: #333333;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;-webkit-tap-highlight-color:rgba(0,0,0,0); font-size:14px;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}
input,select,textarea{font-size:14px;}
table{border-collapse:collapse;border-spacing:0}
fieldset,img{border:0}
abbr,acronym{border:0;font-variant:normal}
del{text-decoration:line-through}
address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:normal}
ol,ul{list-style:none}
caption,th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal; font-family: "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "Hiragino Sans GB", "Source Han Sans CN Normal", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp","PingFangSC-Light", "PingFang SC", sans-serif;}
q:before,q:after{content:''}
button{outline:0;border:none;}
a:hover{text-decoration:none}
ins,a{text-decoration:none}
textarea {resize: none;}
iframe,img {border:0;}
ul,ol {list-style:none;}
a{color: #333333;text-decoration: none;}
input[type="text"],[type="password"],[type="button"], input[type="submit"], input[type="reset"] {
	-webkit-appearance: none;
	outline: none;
}
select{
	/*-webkit-appearance: none;去掉select的下箭头*/
	outline: none;
}
textarea {  -webkit-appearance: none;}
/***全局公共样式 - 开始***/
iframe{
	display: block;
    border: 0px;
}
img{
	max-width:100%;
	max-height: 100%;
}
body {
	/* 背景图片 */
	background-image: url(../assets/images/2.jpg);
	background-size: cover;
	background-position: center top;	
}
.h_8{
	height: 8px;
}
.h_16{
	height: 16px;
}
.h_40{
	height: 40px;
}
.h_44{
	height: 44px;
}
.h_50{
	height: 50px;
}
.h_58{
	height: 58px;
}
.h_90{
	height: 90px;
}
.h_110{
	height: 110px;
}
.no_mr{	margin-right: 0 !important;}
.fl { float:left!important;}
.fr { float:right!important;}
.row_1 { width:100%}
.row_2 { width:66.6%}
.row_3 { width:50%}
.row_4 { width:33.3%}
.row_5 { width:25%}
.row_6 { width:20%}
.clear { clear:both;}

.logo { margin:75px auto 55px auto; text-align:center; width:604px;}


/* 按钮样式 */
.menu01 { 
	margin:0 auto;
	width:570px; height:98px; 
	background-color:rgb(84, 145, 173); 
	border:3px solid #fff; 
	border-radius: 20px;
	line-height:98px; 
	text-align:center; 
	font-size:32px; 
	font-weight:bold; 
	color:#fff; 
	margin-bottom:25px;
  }
.menu01 a { display:block; color:#fff;}

</style>
