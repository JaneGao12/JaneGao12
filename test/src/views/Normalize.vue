<template>
  <div class="normalize">
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
      <h1>数据归一化</h1>
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
	  <div class="yxlpm">
        <ul>
              <!-- <li><Line/></li> -->
              <li><MyChart/></li>

		</ul>
      </div>
      <!-- <div id="graph" style="width: 90%;"></div> -->
   </div>
   <div class="clear"></div>
    </div>
  </div>
</template>


<script>
import MyChart from "../components/MyChart.vue";
export default {
  name: "Normalize",
  components: {
    MyChart
  },
}
</script>

<style scoped>

.jd { margin:50px auto; width:576px; height:56px; background-image:url(../assets/images/jd.png);font-size:16px; font-weight:bold; color:#fff;text-align:center; line-height:56px;}
.jd span { padding:0 15px;}
.footer { background-color:#052740; margin:0 auto; text-align:center; color:#fff; border-top:1px solid #ff1127; height:65px; line-height:65px; opacity:0.8;}

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
/* .left { position:absolute; left:0; width:198px; top:0; bottom:0; background-image:url(../assets/images/bg01.png); border:1px solid #0082d8; padding-bottom:20px; border-bottom:4px solid #024e80; }
.left h1 { display:block; text-align:center; font-size:14px; color:#fff; background-color:#024e80; line-height:30px;}
.left h2 { display:block; text-align:center; font-size:14px; color:#fff; border-bottom:1px solid #001c2f; margin:0 10px; line-height:35px;}
.left ul { margin:0; padding:0;}
.left ul li { height:35px; line-height:35px; text-align:center;} */
.left { 
    position:absolute; left:0;
    width:213px;
    top:0; bottom: 0; 
    background-image:url(../assets/images/bg01.png); 
    border:1px solid #0082d8; 
    padding-bottom:20px; border-bottom:4px solid #024e80; }
.left h1 { display:block; text-align:center; font-size:14px; color:#fff; 
    background-color:#024e80; line-height:50px;}
.left h2 { display:block; text-align:center; font-size:14px; color:#fff; border-bottom:1px solid #001c2f; margin:0 10px; line-height:35px;}
.left ul { margin:0; padding:0;}
.left ul li { height:35px; line-height:35px; text-align:left;}
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
.chul { margin:0 25px; line-height:60px; height:70px; color:#fff; width:400px; font-size:18px;}
.chul .fl span { color:#6dbee4;}
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


.right { margin-left:215px;background-image:url(../assets/images/bg01.png); border:1px solid #0082d8; position:relative;}

.mallCategory{position:relative;width:173px; margin:0 auto; font-size:14px;}
.mallCategory .border{width:173px;height:35px;position:absolute;z-index:14;display:none;}
.mallCategory .border .mask-top{width:173px;height:35px; background-color:#55add6;}
.catList { position:relative; z-index:999; overflow:auto;}
.catList li{overflow:hidden;height:35px; line-height:35px; text-align:center; color:#fff;}
.cat-subcategory{position:absolute;top:29px;left:173px;z-index:10;width:350px;display:none; padding-left:57px;}
.shadow{position:relative;}
.entity-main{overflow:hidden; color:#fff;}
.J_MenuItem01 { height:auto!important; text-align:left!important;}
.J_MenuItem02 { height:auto!important; text-align:left!important;}
.mallCategory01 .border .mask-top {background-color:transparent!important;}
.pmco b {color:#0082d8; font-weight:normal;}
.shitlsit { padding:15px; position:relative; line-height:22px;}
.time_n { height:25px; line-height:25px; font-size:12px; color:#fff;}
.time_n .fr { font-size:14px;}

.fbtzi a { font-weight:normal;color:#0082d8!important; display:inline!important;}
.fbtzi {color:#fff;}
.fbtzi b {color:#0082d8; font-weight:normal;}
.diand { position:absolute; top:25px; left:5px; width:5px; height:5px; background-color:#fff; border-radius:50%;}
.diandline { position:absolute; top:0px; left:7px; width:1px; height:40px; border-left:1px solid #fff; z-index:99;}
.J_MenuItem02:first-of-type .diandline{top:25px;}
.J_MenuItem02:last-child .diandline{ height:27px!important;}

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
.yxlpm ul li { float:left;height: 50%; width:100%; padding:0 10px; box-sizing:border-box; margin-top:50px;}


</style>
