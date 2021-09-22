<template>
  <div class="preprocess">
   <div class="top01"><img src="../assets/images/5.png">  <a href="#"><i class="fa fa-long-arrow-left"></i> 返回首页</a></div>

    <div class="menu">
   <ul>
      <li><router-link to="/preprocess" style="text-decoration: none;">数据预处理</router-link></li>
      <li><router-link to="/normalize" style="text-decoration: none;">数据归一化</router-link></li>
      <li><router-link to="/reduce" style="text-decoration: none;">数据降维</router-link></li>

   </ul>
    </div>

   <div class="content">
      <div class="left">    
      <h1>数据预处理</h1>
      <h2>蛋白质类别</h2>       
      <div class="catList" style="height:570px;">    
        <div class="nav">
            <div class="box">
            <ul>
                <li><a><span><input type="radio"  id="radio11"  name="1"/><label for="radio11">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio12"  name="1"/><label for="radio12">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio13"  name="1"/><label for="radio13">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio14"  name="1"/><label for="radio14">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio11"  name="1"/><label for="radio11">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio12"  name="1"/><label for="radio12">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio13"  name="1"/><label for="radio13">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio14"  name="1"/><label for="radio14">1b-lightChainKappa</label></span></a></li>
                 <li><a><span><input type="radio"  id="radio11"  name="1"/><label for="radio11">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio12"  name="1"/><label for="radio12">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio13"  name="1"/><label for="radio13">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio14"  name="1"/><label for="radio14">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio11"  name="1"/><label for="radio11">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio12"  name="1"/><label for="radio12">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio13"  name="1"/><label for="radio13">1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio14"  name="1"/><label for="radio14">1b-lightChainKappa</label></span></a></li>

            </ul>
            </div>

        </div>
      </div>
    </div>
  
   <div class="right">
      <div class="left_t"></div>
      <div class="left_l"></div>
      <div class="left_rb"></div>
      <div class="left_br"></div>
      <div class="chul">
        <div class="fl">预处理时间：<span>1254秒</span></div>
      </div>
     <ul>
        <h1>原始数据:</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>
      <ul>
        <h1>bilateral_filtering:</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>  
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>
      <ul>
        <h1>binarization:</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>  
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>
      <ul>
        <h1>canny:</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>  
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>
    <ul>
        <h1>inter_blur:</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>  
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>
   <div class="clear"></div>
      <!-- <div id="graph" style="width: 90%;height:600px;"></div> -->
   </div>
   <div class="clear"></div>
    </div>
<!-- <script type="text/javascript" src="js/3c-menu.js"></script> -->
  </div>
</template>


<script>
export default {
  name: "Calculate",
  components: {},
}
</script>

<style scoped>
.top { margin:0 auto; height:90px; text-align:center; position:relative;}
.top a { position:absolute; right:25px; top:30px; background-color:rgb(68, 116, 138); border:1px solid #fff; padding:3px 10px; color:#fff; font-size:14px;}
.top a .fa-long-arrow-left { width:15px; font-weight:bold;}
.top01 { margin:0 auto; height:65px; position:relative; padding:0 25px;}
.top01 a { position:absolute; right:25px; top:15px; background-color:rgb(68, 116, 138); border:1px solid #fff; padding:3px 10px; color:#fff; font-size:14px;}
.top01 a .fa-long-arrow-left { width:15px; font-weight:bold;}

.menu { margin:0 25px; height:42px; background-color:#477491;}
.menu ul li { float:left;}
.menu ul li a { display:block; line-height:42px; color:#fff; padding:0 20px;}
.menu ul li a:hover {background-color:#024e80;}
.active a { background-color:#024e80;}

.content {margin:0 25px; position:relative; margin-top:10px;margin-bottom:25px;}
.content .left_t { position:absolute; top:-1px; left:0; border:2px solid #024e80; width:50px; height:0px;overflow-y:auto;}
.content .left_l { position:absolute; top:0; left:-1px; border:2px solid #024e80; width:0px; height:50px;}
.content .left_rb {position:absolute; bottom:-1px; right:0px; border:2px solid #024e80; width:50px; height:0px;}
.content .left_br {position:absolute; bottom:0px; right:-1px; border:2px solid #024e80; width:0px; height:50px;}
.left { position:absolute; left:0; width:198px; top:0; bottom:0; background-image:url(../assets/images/bg01.png); border:1px solid #0082d8; padding-bottom:20px; border-bottom:4px solid #024e80; }
.left h1 { display:block; text-align:center; font-size:14px; color:#fff; background-color:#024e80; line-height:30px;}
.left h2 { display:block; text-align:center; font-size:14px; color:#fff; border-bottom:1px solid #001c2f; margin:0 10px; line-height:35px;}
.left ul { margin:0; padding:0;}
.left ul li { height:35px; line-height:35px; text-align:center;}
.right ul { float:left; width:100%; margin-bottom:45px; border-bottom: 1px solid #001c2f;}
.right ul li { float:left; width:20%; margin-bottom:45px;}
.right ul li div { margin:0 22px;   color:#fff; }
.right ul li div a { display:block; text-align:center; color:#fff;}
.right h1 {margin:0 -120px;line-height:30px; height:70px; color:#fff; width:400px;font-size:18px;}
.right ul li div p {text-transform:uppercase; font-size:14px;display:block; margin-top:10px;}
.chul { margin:0 25px; line-height:60px; height:70px; color:#fff; width:400px; font-size:18px;}
.chul .fl span { color:#6dbee4;}

/* 左侧菜单 */
.nav{
    width: 213px;
    height: 760px;
}

.nav a{
    text-decoration: none;/*去掉字下划线*/
    margin: 0 30px;
    color: rgb(255, 255, 255);
}
.nav li{
    overflow: hidden;/*隐藏圆点*/
    line-height: 80px;/*行高*/
    
}

.nav li:hover{/*hover表示鼠标放上去之后的变化*/
    background-color: rgb(48, 83, 116);
}
.nav li:focus{
    background-color:rgb(48, 83, 116) ;
}

/* 滑轮 */
.catList { 
    /* position:relative; */
    z-index:999; 
    overflow:auto;
	height:620px;
}

.cat_wrap {margin:0 10px; overflow:auto;}
.cat_wrap::-webkit-scrollbar
{
    width: 5px;
    height: 16px;
    background-color: #0082d8;
}
 /*定义滚动条轨道 内阴影+圆角*/
.cat_wrap::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}
 
/*定义滑块 内阴影+圆角*/
.cat_wrap::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}

.cat_wrap .cat_header {	}
.cat_wrap .cat_list div li {float:left;color:#ccc;font-size:14px;width:100%;}
.cat_wrap .cat_list {cursor:pointer;}
.cat_wrap .cat_list div .active {width:100%; position:relative; z-index:999; border-right:none; background-color:#d50316; line-height:35px;}



/*banner浮层滑动显示弹框*/
.cat_subcont {display:none;}
.cat_subcont.active {display:block;}
.cat_sublist {position:absolute;z-index:10000;top:0px;left:230px;padding-top:5px;min-height:300px;width:350px;color:#fff; display:none;}
.float { position: relative; }
.cat_subcont .cat_sublist .fore1 {width:100%;}
.cat_subcont .cat_sublist .fore1 .fore_list {padding:0 20px;}
.cat_subcont .cat_sublist .fore1 .fore_list h3 {padding:5px;border-bottom:1px solid #d3d3d3;}
.cat_subcont .cat_sublist .fore1 .fore_list h3 a {font-size:14px;color:#00a1ea;}
.cat_subcont .cat_sublist .fore1 .fore_list li {float:left;padding:5px;}
.cat_subcont .cat_sublist .fore1 .fore_list li a {font-size:12px;color:#333;}
.cat_subcont .cat_sublist .fore1 .fore_list li a:hover {color:#00a1ea;text-decoration:underline;}



.mshu { margin:0 auto; padding:15px; border:1px solid #0082d8; margin-top:50px; background-color:#052740; }
.mshu h3 { display:block; line-height:25px; font-size:16px;float:left; width:100%;}
.mshu dl { display:block;}
.mshu dl dd { display:inline; width:50%;line-height:25px; float:left;}
.mshu dl dd span { color:#0082d8;}
.mshu p { display:block; line-height:22px; border-top:1px solid #666;float:left; width:100%; margin-top:10px; padding-top:5px;}

.sousuo { background-image:url(../assets/images/bg01.png); padding:10px; margin:7px; position:relative;}
.sousuo dl dd { height:30px; margin-top:3px; float:left; width:100%; position:relative;}
.sousuo dl dd i { position:absolute; left:0; top:7px;background-color:#0082d8; border-radius:50%; color:#00233a; font-size:12px; padding:3px;
transform:rotate(180deg);
-ms-transform:rotate(90deg); 	/* IE 9 */
-moz-transform:rotate(90deg); 	/* Firefox */
-webkit-transform:rotate(90deg); /* Safari 和 Chrome */
-o-transform:rotate(90deg); 	/* Opera */
}
.inputstyle { margin-left:25px; line-height:30px;color:#0082d8;}
.inputstyle input { height:30px; width:100%; border:0; border-bottom:1px solid #0082d8; background-color:transparent; color:#0082d8; padding-left:5px; box-sizing:border-box;}
.sous { margin-top:15px!important;}
.submintc { width:100%; border:0; background-color:#0082d8; color:#fff; padding:5px 0; cursor:pointer;}
.sousuo span { position:absolute; left:18px; top:25px; border-left:1px dotted #0082d8; height:30px;}
.sousuo01 { background-image:none}

.leftMenu {
	margin: 10px;
}
.menu_gx {
	
}
.menu_gx .ListTitle {
	border-bottom: 1px #001c2f solid;
	display: block;
	text-align: left;
	height: 39px;
	line-height: 38px;
	cursor: pointer;
	color:#fff;
	font-size:12px;
	position:relative;
}
.menu_gx .ListTitle strong { float:left; border-bottom:2px solid #F00;}
.ListTitlePanel {
	position: relative;
}
.leftbgbt {
	position: absolute;
	width: 11px;
	height: 52px;
	right: 0px;
	top: 0px;
	zoom:1;
	color:#f0f0f0;
}
.menuList {
	display: none;
	height: auto;
	margin-top:10px;
	
}
.menuList div {
	height: 20px;
	line-height: 20px;
	color:#fff;
	font-size:12px;
	margin-left:25px;
}
.menuList div span {color:#0082d8;}
.chakan { margin:0 auto;}
.chakan .cat_list div.active { background-color:transparent;}
.pinl { margin:10px; border-bottom:1px solid #001c2f;}
.artit { color:#fff;}
.artitcpn { margin:5px 0; color:#0082d8;}
.pilist { height:50px; position:relative; padding:10px 0;border-bottom:1px solid #001c2f;}
.xuhao { position:absolute; height:50px; left:0; top:10px; width:35px; line-height:50px; text-align:center; font-size:32px; color:#747f89; font-weight:bold; font-family:Arial, Helvetica, sans-serif;}
.xuhao01 { color:#ffba34;}
.paiming .cat_list div.active { background-color:transparent;}
.pmname { margin-left:45px; height:25px; line-height:25px; color:#fff;}
.pmco { margin-left:45px; height:25px; line-height:25px; color:#fff; font-size:12px;}
.pmco span {color:#0082d8;}
.shitlsit { padding:15px; position:relative; line-height:22px;}
.time_n { height:25px; line-height:25px; font-size:12px; color:#fff;}
.time_n .fr { font-size:14px;}
.shitai .cat_list { margin-top:10px;}
.fbtzi {color:#fff;}
.fbtzi span {color:#0082d8;}
.diand { position:absolute; top:25px; left:5px; width:5px; height:5px; background-color:#fff; border-radius:50%;}
.diandline { position:absolute; top:0px; left:7px; width:1px; height:40px; border-left:1px solid #fff; z-index:99;}
.shitai .cat_list .float:first-of-type .diandline{top:25px;}
.shitai .cat_list .float:last-child .diandline{ height:27px!important;}
.tji { margin:0 10px; }
.tjicon {border-bottom:1px solid #001c2f; height:60px; line-height:60px; color:#fff; padding:0 10px;}
.tjicon .fr { font-size:32px; font-weight:bold; color:#0082d8;}

.right { margin-left:215px;background-image:url(../assets/images/bg01.png); border:1px solid #0082d8; position:relative;}

.opbg { opacity:0.7; background-color:#000; position:absolute; left:0; right:0; top:0; bottom:0;}
.upload {position:absolute; left:50%;  top:50%; width:440px; height:180px; margin-left:-220px; margin-top:-90px; border:2px solid #0082d8; background-image:url(../assets/images/bg02.png);}
.upload .left_t { position:absolute; top:-3px; left:-3px; border:2px solid #d50316; width:50px; height:0px;}
.upload .left_l { position:absolute; top:-3px; left:-3px; border:2px solid #d50316; width:0px; height:50px;}
.upload .left_rb {position:absolute; bottom:-3px; right:-3px; border:2px solid #d50316; width:50px; height:0px;}
.wenzi { margin:0 25px; border-bottom:1px solid #666; padding:15px 0; height:60px; color:#0082d8;}
.wenzi .fa-arrow-up { float:left; width:50px; height:50px; border:5px solid #0082d8; border-radius:50%; font-size:32px; font-weight:normal; text-align:center; line-height:50px;}
.fsc { color:#0082d8; font-size:32px; font-weight:bold; margin-left:20px; float:left;}
.fsc p { font-size:14px; font-weight:normal;}
.schuan { margin:0 25px; padding-top:15px; position:relative;}
.schuan_ip { float:left; width:275px; height:30px; padding:0 10px; background-color:#fff; border:1px solid #ddd;}
.uploadcon {
    display: inline-block;
    position: relative;
	float: right;
	text-align:center;
	line-height:30px;
}
.uploadcon .daoeu {
    position: absolute;
    left: 0px;
    top: 0;
    opacity: 0;
    width: 96px;
    height: 34px;
}
.submit_btn { float:right; height:30px; background-color:#0082d8; color:#fff; width:80px; border:1px solid #0082d8; cursor:pointer; }
.user_def { margin:50px auto; width:910px;border:2px solid #0082d8; background-image:url(../assets/images/bg01.png); padding:0 35px; position:relative; }
.user_def .left_t { position:absolute; top:-3px; left:-3px; border:2px solid #d50316; width:50px; height:0px;}
.user_def .left_l { position:absolute; top:-3px; left:-3px; border:2px solid #d50316; width:0px; height:50px;}
.user_def .left_rb {position:absolute; bottom:-3px; right:-3px; border:2px solid #d50316; width:50px; height:0px;}
.usertit { margin:0 auto; line-height:50px; text-align:center; height:50px; margin-top:10px; border-bottom:1px solid #666; font-size:20px; font-weight:bold;color:#0082d8; }
.usercon {border-bottom:1px solid #666;margin:0 auto; }
.username { margin:0 auto; text-align:center; margin-top:20px; line-height:25px;}
.username span { padding:0 25px; color:#fff;}
.username span strong { font-weight:normal;color:#0082d8;}
.username span strong a {color:#0082d8;}
.username01 { text-align:left;}
.username01 span { padding-right:50px; padding-left:0;}
.usercon span { color:#0082d8;}
.usercon span strong { font-weight:normal;color:#fff;}
.usercon01 { padding:10px 0; line-height:25px;}

.shitai .fbtzi a { font-weight:normal;color:#0082d8;}
.shitai .cat_list .active {
	color:#fff;
}
.shitai .cat_list .active a {
    background-color:transparent;color:#fff;
}

.mallCategory{position:relative;width:173px; margin:0 auto; font-size:14px;}
.mallCategory .border{width:173px;height:35px;position:absolute;z-index:14;display:none;}
.mallCategory .border .mask-top{width:173px;height:35px; background-color:#55add6;}
.catList { position:relative; z-index:999; overflow:auto;}
.catList li{overflow:hidden;height:35px; line-height:35px; text-align:center; color:#fff;}


.catList::-webkit-scrollbar
{
    width: 5px;
    height: 5px;
    background-color: #0082d8;
}
 /*定义滚动条轨道 内阴影+圆角*/
.catList::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}
 
/*定义滑块 内阴影+圆角*/
.catList::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}

.yxlpm { margin:0 auto; min-height:600px;}
.yxlpm ul li { float:left; width:33.33%; padding:0 10px; box-sizing:border-box; margin-top:50px;}

</style>
