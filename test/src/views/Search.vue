<template>
  <div class="search">
  <div class="background">    
  <div class="top"><img src="../assets/images/7.png">  
  <a href="javascript:history.back(-1);"><i class="fa fa-long-arrow-left"></i> 返回首页</a></div>

<!-- 检索栏 -->
   <div class="search bar">
    <form id="uploadForm" enctype="multipart/form-data">
      <!-- 检索按钮 -->
      <a class="btn-file">
      <input type="file" name="file" class="file" multiple="multiple"/>
      <input type="button" class="button" id="uploadButton" value="检索" />
      </a>
    </form>
    </div>
<!-- 显示区域 -->
<div class="main">
   <div class="left_t"></div>
   <div class="left_l"></div>
   <div class="left_tr"></div>
   <div class="left_lb"></div>
   <div class="left_rb"></div>
   <div class="left_br"></div>
   <div class="chul">
            <div class="fl" id="clustertime" >
              检索时间：1234秒
            </div>
   </div>   
  <h1>上传蛋白质多视图展示:</h1>
  <ul style="float:left; width:100%;margin-top:-20px; margin-bottom:45px; border-bottom: 1px solid #001c2f;" id="uploadmultiview" >
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png"> 
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png"> 
  </ul> 
  <h1>检索蛋白质多视图展示:</h1>
  <ul style="float:left; width:100%; margin-top:45px; margin-bottom:45px; border-bottom: 1px solid #001c2f;" id="resmultiview" >
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png"> 
  </ul> 

   <!-- <div class="imgtest">
        <h1>上传模型展示:</h1>
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
   </div>
    <div class="imgtest1">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
         <img src="http://39.98.244.125:8002/static/images/14/14_0.png">
    </div> -->
   <div class="clear"></div>
   </div>



  </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  name: "Search",
  components: {},
}
   $(function () {
      $(function () {
       $("#uploadButton").on('click', function () {
                var formData = new FormData($('#uploadForm')[0]);
                // console.log(formData);
                // if ($('#uploadForm').get(0).files[0]) {
                //   alert("请选择文件");
                //   return;
                // }
                // var timer1;
                // var count = 0;
                $.ajax({
                  type: 'post',
                  url: "http://39.98.244.125:8002/upload/",
                  data: formData,
                  cache: false,
                  processData: false,
                  contentType: false,
                  // beforeSend: function () {
                    // $("#uploadForm").addClass("disabled");
                    // function f() {
                    //   $('#serverResponse').text("正在上传和实时处理中...  用时" + count + "秒");
                    //   count += 1;
                    // };
                    // timer1 = setInterval(f, 1000);
                  // },
                  success: function (data) {
                    // $('#serverResponse').text("新增节点：" + data + "个，共耗时：" + count + "秒");
                    var _data =  data.data;

                    var recode =data.code;
                    console.log(recode);
                    if (recode=="200000") {  
                    alert("上传失败:请上传OFF格式蛋白质模型，或检查网络"); 
                    } else{
                    var upload_mutilview_url = _data.upload_mutilview_url;
                    var id_list = _data.id_list;
                    var classname_list = _data.classname_list;
                    var res_mutilview_url = _data.res_mutilview_url;
                    var _time = _data.time;
                    $("#clustertime").empty();
                    $("#clustertime").append(_time);
                    var str1 = "";
                    $.each(upload_mutilview_url, function(i, obj) {

                        str1 += '<li style="float:left; width:9%; height: 9%; margin-bottom:45px; margin:5px 5px;" id="uploadmultiview1"><div>';

                        str1 += '<img src="' + obj + '"></div></li>';

                      });
                    // console.log(str1)

                   $("#uploadmultiview").empty();
                   $("#uploadmultiview").append(str1);
                   str1 =""
                  $.each(res_mutilview_url, function(i, obj) {

                        str1 += '<li style="float:left; width:9%; height: 9%;   margin-bottom:45px; margin:5px 5px;" id="uploadmultiview1"><div>';

                        str1 += '<img src="' + obj + '"><p style="text-transform:uppercase; font-size:14px;display:block; margin-top:5px;color:#fff">ID名：'+id_list[i]+'</p><p style="text-transform:uppercase; font-size:14px;display:block; margin-top:5px;color:#fff">类别名：'+classname_list[i]+'</p></div></li>';

                      });
                    // console.log(str1)

                   $("#resmultiview").empty();
                   $("#resmultiview").append(str1);
                  }},
                  complete: function () {
                    // $("#uploadForm").removeClass("disabled");
                    // clearInterval(timer1);
                    // $('#serverResponse').append('<br><a class="Special" href="/testmodelList">模型列表</a>')
                  },
                  error: function () {
                    alert("上传失败");
                  },
                });
              });
            });
          });
       
</script>

<style scoped>
.top { margin:0 auto; height:90px; text-align:center; position:relative;}
.top a { position:absolute; right:25px; top:30px; background-color:rgb(68, 116, 138); border:1px solid #fff; padding:3px 10px; color:#fff; font-size:14px;}
.top a .fa-long-arrow-left { width:15px; font-weight:bold;}
.top01 { margin:0 auto; height:65px; position:relative; padding:0 25px;}
.top01 a { position:absolute; right:25px; top:15px; background-color:rgb(68, 116, 138); border:1px solid #fff; padding:3px 10px; color:#fff; font-size:14px;}
.top01 a .fa-long-arrow-left { width:15px; font-weight:bold;}

.main { margin:100px 25px;position:relative; background-image:url(../assets/images/bg01.png); 
        margin-top: 50px;
        padding:0 22px; padding-top:0; margin-bottom:25px;}
.left_t { position:absolute; top:0; left:0; border:2px solid #024e80; width:50px; height:0px;}
.left_l { position:absolute; top:0; left:0; border:2px solid #024e80; width:0px; height:50px;}
.left_tr { position:absolute; top:0; right:0; border:2px solid #024e80; width:50px; height:0px;}
.left_lb { position:absolute; bottom:0; left:0; border:2px solid #024e80; width:0px; height:50px;}
.left_rb {position:absolute; bottom:0; right:0; border:2px solid #024e80; width:50px; height:0px;}
.left_br {position:absolute; bottom:0; right:0; border:2px solid #024e80; width:0px; height:50px;}
.chul { margin:0 20px; line-height:70px; height:80px; color:#fff; width:400px; font-size:20px;}
.chul .fl span { color:#6dbee4;}

.main ul { float:left; width:100%; margin-bottom:45px; border-bottom: 1px solid #001c2f;}
.main ul li { float:left; width:10%; margin-bottom:45px;}
.main ul li div { margin:0 22px;   color:#fff; }
.main ul li div a { display:block; text-align:center; color:#fff;}
.main h1 {margin:0 -80px;line-height:30px; height:70px; color:#fff; width:400px;font-size:20px;}
.main ul li div p {text-transform:uppercase; font-size:14px;display:block; margin-top:10px;}
.main ul img{
   float:left; width:9%; height: 9%; margin:10px 5px}





.active { background-color:#024e80;}
.clear { clear:both;}
  
  /* 检索栏 */
  
  .search form {
      position: relative;
      width: 400px;
      margin: 0 auto;
  }

 
  .bar input {
      border: 2px solid #000000;
      border-radius: 5px;
      top: 0;
      right: 0;
      -webkit-box-sizing:border-box;
      
  }

  .file{
    width: 650px;
    height: 42px;
    margin-top: 20px;
    margin-left:-200px;
    padding: 7.2px 0;
  }
  


  .button {
      cursor: pointer;
      position: absolute;
      background-color:transparent;
      font-size: 16px;
      border-radius: 0 5px 5px 0;
      height: 42px;
      width: 150px;
      top: 0;
      right: 0;
      margin-top: 20px;
      margin-right: -200px;
  }
  .button:before {
      /* font-size: 14px; */
      color: #000000;
      position: relative;
      display: inline-block;
      outline: none;
      text-decoration: none;
      padding: 11px 15px;
  }
</style>
