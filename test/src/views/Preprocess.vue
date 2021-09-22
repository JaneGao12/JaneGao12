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
      <div class="catList" style="height:1300px;">    
        <div class="nav">
           
            <div class="box">
            <ul>
                <li><a><span><input type="radio"  id="radio0"  name="radio"  value="1b-lightChainKappa"  ><label for="radio0" >1b-lightChainKappa</label></span></a></li>
                <li><a><span><input type="radio"  id="radio1"  name="radio"  value="Ab-gp120"  ><label for="radio1" >Ab-gp120</label></span></a></li>
                <li><a><span><input type="radio"  id="radio2"  name="radio"  value="Ab-heavyChain"  ><label for="radio2" >Ab-heavyChain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio3"  name="radio"  value="Ab-light-Chain"  ><label for="radio3" >Ab-light-Chain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio4"  name="radio"  value="ArabidopsisPin1"  ><label for="radio4" >ArabidopsisPin1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio5"  name="radio"  value="ArabidopsisPin1-domain"  ><label for="radio5" >ArabidopsisPin1-domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio6"  name="radio"  value="Bax"  ><label for="radio6" >Bax</label></span></a></li>
                <li><a><span><input type="radio"  id="radio7"  name="radio"  value="Bcl2like"  ><label for="radio7" >Bcl2like</label></span></a></li>
                <li><a><span><input type="radio"  id="radio8"  name="radio"  value="Bcl2like-Bax"  ><label for="radio8" >Bcl2like-Bax</label></span></a></li>
                <li><a><span><input type="radio"  id="radio9"  name="radio"  value="CRABPII"  ><label for="radio9" >CRABPII</label></span></a></li>
                <li><a><span><input type="radio"  id="radio10"  name="radio"  value="CaM"  ><label for="radio10" >CaM</label></span></a></li>
                <li><a><span><input type="radio"  id="radio11"  name="radio"  value="CaM-NaV"  ><label for="radio11" >CaM-NaV</label></span></a></li>
                <li><a><span><input type="radio"  id="radio12"  name="radio"  value="CaM-eNOS"  ><label for="radio12" >CaM-eNOS</label></span></a></li>
                <li><a><span><input type="radio"  id="radio13"  name="radio"  value="CaM-iNOS"  ><label for="radio13" >CaM-iNOS</label></span></a></li>
                <li><a><span><input type="radio"  id="radio14"  name="radio"  value="CrkIIpeptide"  ><label for="radio14" >CrkIIpeptide</label></span></a></li>
                <li><a><span><input type="radio"  id="radio15"  name="radio"  value="CyclophilinA-CrkIIApeptide"  ><label for="radio15" >CyclophilinA-CrkIIApeptide</label></span></a></li>
                <li><a><span><input type="radio"  id="radio16"  name="radio"  value="Dynein-dimer"  ><label for="radio16" >Dynein-dimer</label></span></a></li>
                <li><a><span><input type="radio"  id="radio17"  name="radio"  value="EIF1"  ><label for="radio17" >EIF1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio18"  name="radio"  value="EIF1A"  ><label for="radio18" >EIF1A</label></span></a></li>
                <li><a><span><input type="radio"  id="radio19"  name="radio"  value="EIF1A-HisTag"  ><label for="radio19" >EIF1A-HisTag</label></span></a></li>
                <li><a><span><input type="radio"  id="radio20"  name="radio"  value="FK506"  ><label for="radio20" >FK506</label></span></a></li>
                <li><a><span><input type="radio"  id="radio21"  name="radio"  value="Fis1"  ><label for="radio21" >Fis1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio22"  name="radio"  value="Fis1-domain"  ><label for="radio22" >Fis1-domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio23"  name="radio"  value="GABARAP"  ><label for="radio23" >GABARAP</label></span></a></li>
                <li><a><span><input type="radio"  id="radio24"  name="radio"  value="GABARAP-domain"  ><label for="radio24" >GABARAP-domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio25"  name="radio"  value="Galectin1"  ><label for="radio25" >Galectin1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio26"  name="radio"  value="Galectin1-dimer"  ><label for="radio26" >Galectin1-dimer</label></span></a></li>
                <li><a><span><input type="radio"  id="radio27"  name="radio"  value="HCR-NTPase"  ><label for="radio27" >HCR-NTPase</label></span></a></li>
                <li><a><span><input type="radio"  id="radio28"  name="radio"  value="HSPC210"  ><label for="radio28" >HSPC210</label></span></a></li>
                <li><a><span><input type="radio"  id="radio29"  name="radio"  value="HisTag"  ><label for="radio29" >HisTag</label></span></a></li>
                <li><a><span><input type="radio"  id="radio30"  name="radio"  value="IFNA2A"  ><label for="radio30" >IFNA2A</label></span></a></li>
                <li><a><span><input type="radio"  id="radio31"  name="radio"  value="IFNR-2betaChains"  ><label for="radio31" >IFNR-2betaChains</label></span></a></li>
                <li><a><span><input type="radio"  id="radio32"  name="radio"  value="IFNR-IFN"  ><label for="radio32" >IFNR-IFN</label></span></a></li>
                <li><a><span><input type="radio"  id="radio33"  name="radio"  value="IFNR-betaChain"  ><label for="radio33" >IFNR-betaChain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio34"  name="radio"  value="L-FABP"  ><label for="radio34" >L-FABP</label></span></a></li>
                <li><a><span><input type="radio"  id="radio35"  name="radio"  value="MAD2A"  ><label for="radio35" >MAD2A</label></span></a></li>
                <li><a><span><input type="radio"  id="radio36"  name="radio"  value="MAD2A-MAD2A-peptide"  ><label for="radio36" >MAD2A-MAD2A-peptide</label></span></a></li>
                <li><a><span><input type="radio"  id="radio37"  name="radio"  value="MAD2A-peptide"  ><label for="radio37" >MAD2A-peptide</label></span></a></li>
                <li><a><span><input type="radio"  id="radio38"  name="radio"  value="MAPLC3"  ><label for="radio38" >MAPLC3</label></span></a></li>
                <li><a><span><input type="radio"  id="radio39"  name="radio"  value="MIA"  ><label for="radio39" >MIA</label></span></a></li>
                <li><a><span><input type="radio"  id="radio40"  name="radio"  value="NADH-ubiquitinoneOxidoreductaseComplex"  ><label for="radio40" >NADH-ubiquitinoneOxidoreductaseComplex</label></span></a></li>
                <li><a><span><input type="radio"  id="radio41"  name="radio"  value="NHP2like-domain"  ><label for="radio41" >NHP2like-domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio42"  name="radio"  value="NHP2like-protein"  ><label for="radio42" >NHP2like-protein</label></span></a></li>
                <li><a><span><input type="radio"  id="radio43"  name="radio"  value="NSP3A"  ><label for="radio43" >NSP3A</label></span></a></li>
                <li><a><span><input type="radio"  id="radio44"  name="radio"  value="NaV"  ><label for="radio44" >NaV</label></span></a></li>
                <li><a><span><input type="radio"  id="radio45"  name="radio"  value="P16INK4A"  ><label for="radio45" >P16INK4A</label></span></a></li>
                <li><a><span><input type="radio"  id="radio46"  name="radio"  value="P18INK4C"  ><label for="radio46" >P18INK4C</label></span></a></li>
                <li><a><span><input type="radio"  id="radio47"  name="radio"  value="PCDP5"  ><label for="radio47" >PCDP5</label></span></a></li>
                <li><a><span><input type="radio"  id="radio48"  name="radio"  value="PCDP5-domain"  ><label for="radio48" >PCDP5-domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio49"  name="radio"  value="PHPT"  ><label for="radio49" >PHPT</label></span></a></li>
                <li><a><span><input type="radio"  id="radio50"  name="radio"  value="PPIL1"  ><label for="radio50" >PPIL1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio51"  name="radio"  value="ProfilinI"  ><label for="radio51" >ProfilinI</label></span></a></li>
                <li><a><span><input type="radio"  id="radio52"  name="radio"  value="SH21A"  ><label for="radio52" >SH21A</label></span></a></li>
                <li><a><span><input type="radio"  id="radio53"  name="radio"  value="SH21A-nYc-peptide"  ><label for="radio53" >SH21A-nYc-peptide</label></span></a></li>
                <li><a><span><input type="radio"  id="radio54"  name="radio"  value="SOCS-elongin-complexe"  ><label for="radio54" >SOCS-elongin-complexe</label></span></a></li>
                <li><a><span><input type="radio"  id="radio55"  name="radio"  value="SOCS3"  ><label for="radio55" >SOCS3</label></span></a></li>
                <li><a><span><input type="radio"  id="radio56"  name="radio"  value="SUMOAE"  ><label for="radio56" >SUMOAE</label></span></a></li>
                <li><a><span><input type="radio"  id="radio57"  name="radio"  value="SUMOAE-UBC9"  ><label for="radio57" >SUMOAE-UBC9</label></span></a></li>
                <li><a><span><input type="radio"  id="radio58"  name="radio"  value="Synaptotagmin1"  ><label for="radio58" >Synaptotagmin1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio59"  name="radio"  value="Synaptotagmin1-aFGF"  ><label for="radio59" >Synaptotagmin1-aFGF</label></span></a></li>
                <li><a><span><input type="radio"  id="radio60"  name="radio"  value="TCTP"  ><label for="radio60" >TCTP</label></span></a></li>
                <li><a><span><input type="radio"  id="radio61"  name="radio"  value="TCTP-domain"  ><label for="radio61" >TCTP-domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio62"  name="radio"  value="UBC9"  ><label for="radio62" >UBC9</label></span></a></li>
                <li><a><span><input type="radio"  id="radio63"  name="radio"  value="UCEE2D3"  ><label for="radio63" >UCEE2D3</label></span></a></li>
                <li><a><span><input type="radio"  id="radio64"  name="radio"  value="UCEE2D3-UB"  ><label for="radio64" >UCEE2D3-UB</label></span></a></li>
                <li><a><span><input type="radio"  id="radio65"  name="radio"  value="UCEE2V2"  ><label for="radio65" >UCEE2V2</label></span></a></li>
                <li><a><span><input type="radio"  id="radio66"  name="radio"  value="UCEE2V2-hUbiquitin"  ><label for="radio66" >UCEE2V2-hUbiquitin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio67"  name="radio"  value="UFC1-domain"  ><label for="radio67" >UFC1-domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio68"  name="radio"  value="UFC1-protein"  ><label for="radio68" >UFC1-protein</label></span></a></li>
                <li><a><span><input type="radio"  id="radio69"  name="radio"  value="UIMC1"  ><label for="radio69" >UIMC1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio70"  name="radio"  value="UIMC1-humanUbiquitin"  ><label for="radio70" >UIMC1-humanUbiquitin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio71"  name="radio"  value="UbcH5B"  ><label for="radio71" >UbcH5B</label></span></a></li>
                <li><a><span><input type="radio"  id="radio72"  name="radio"  value="Vif"  ><label for="radio72" >Vif</label></span></a></li>
                <li><a><span><input type="radio"  id="radio73"  name="radio"  value="Vif-Elongin"  ><label for="radio73" >Vif-Elongin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio74"  name="radio"  value="acidicFGF"  ><label for="radio74" >acidicFGF</label></span></a></li>
                <li><a><span><input type="radio"  id="radio75"  name="radio"  value="alpha-Synuclein"  ><label for="radio75" >alpha-Synuclein</label></span></a></li>
                <li><a><span><input type="radio"  id="radio76"  name="radio"  value="beta2-microglobulin"  ><label for="radio76" >beta2-microglobulin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio77"  name="radio"  value="chitinaseA1"  ><label for="radio77" >chitinaseA1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio78"  name="radio"  value="cyclophilinA"  ><label for="radio78" >cyclophilinA</label></span></a></li>
                <li><a><span><input type="radio"  id="radio79"  name="radio"  value="destrin"  ><label for="radio79" >destrin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio80"  name="radio"  value="dynein-lightChain"  ><label for="radio80" >dynein-lightChain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio81"  name="radio"  value="eIF1-domain"  ><label for="radio81" >eIF1-domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio82"  name="radio"  value="eNOS"  ><label for="radio82" >eNOS</label></span></a></li>
                <li><a><span><input type="radio"  id="radio83"  name="radio"  value="glutaredoxin"  ><label for="radio83" >glutaredoxin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio84"  name="radio"  value="gp120"  ><label for="radio84" >gp120</label></span></a></li>
                <li><a><span><input type="radio"  id="radio85"  name="radio"  value="hIL-21"  ><label for="radio85" >hIL-21</label></span></a></li>
                <li><a><span><input type="radio"  id="radio86"  name="radio"  value="humanCofilin"  ><label for="radio86" >humanCofilin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio87"  name="radio"  value="humanDim1"  ><label for="radio87" >humanDim1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio88"  name="radio"  value="humanElonginB1"  ><label for="radio88" >humanElonginB1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio89"  name="radio"  value="humanElonginB2"  ><label for="radio89" >humanElonginB2</label></span></a></li>
                <li><a><span><input type="radio"  id="radio90"  name="radio"  value="humanHSPCO34"  ><label for="radio90" >humanHSPCO34</label></span></a></li>
                <li><a><span><input type="radio"  id="radio91"  name="radio"  value="humanIL-4"  ><label for="radio91" >humanIL-4</label></span></a></li>
                <li><a><span><input type="radio"  id="radio92"  name="radio"  value="humanNGAL"  ><label for="radio92" >humanNGAL</label></span></a></li>
                <li><a><span><input type="radio"  id="radio93"  name="radio"  value="humanPRL3"  ><label for="radio93" >humanPRL3</label></span></a></li>
                <li><a><span><input type="radio"  id="radio94"  name="radio"  value="humanPRL3-phosphataseDomain"  ><label for="radio94" >humanPRL3-phosphataseDomain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio95"  name="radio"  value="humanPin1"  ><label for="radio95" >humanPin1</label></span></a></li>
                <li><a><span><input type="radio"  id="radio96"  name="radio"  value="humanPin1domain"  ><label for="radio96" >humanPin1domain</label></span></a></li>
                <li><a><span><input type="radio"  id="radio97"  name="radio"  value="humanPin1domain2"  ><label for="radio97" >humanPin1domain2</label></span></a></li>
                <li><a><span><input type="radio"  id="radio98"  name="radio"  value="humanProlcatin"  ><label for="radio98" >humanProlcatin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio99"  name="radio"  value="humanRPABC14.4"  ><label for="radio99" >humanRPABC14.4</label></span></a></li>
                <li><a><span><input type="radio"  id="radio100"  name="radio"  value="humanSulfiredoxin"  ><label for="radio100" >humanSulfiredoxin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio101"  name="radio"  value="humanUbc2b"  ><label for="radio101" >humanUbc2b</label></span></a></li>
                <li><a><span><input type="radio"  id="radio102"  name="radio"  value="humanUbiquitin"  ><label for="radio102" >humanUbiquitin</label></span></a></li>
                <li><a><span><input type="radio"  id="radio103"  name="radio"  value="iNOS"  ><label for="radio103" >iNOS</label></span></a></li>
                <li><a><span><input type="radio"  id="radio104"  name="radio"  value="murinElonginB2"  ><label for="radio104" >murinElonginB2</label></span></a></li>
                <li><a><span><input type="radio"  id="radio105"  name="radio"  value="nYc-peptide"  ><label for="radio105" >nYc-peptide</label></span></a></li>
                <li><a><span><input type="radio"  id="radio106"  name="radio"  value="pancreaticRibonuclease"  ><label for="radio106" >pancreaticRibonuclease</label></span></a></li>

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
        <!-- <div class="fl">预处理时间：<span>1254秒</span></div> -->
        <div class="fl" id="propressingtime" >预处理时间：1254秒</div>
      </div>
     <!-- <h1>原始数据:</h1> -->
     <ul style="float:left; width:100%; margin-bottom:45px; border-bottom: 1px solid #001c2f;" id="ori_mutilview_show">
         <h1>原始数据:</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>

      <h1>双边滤波:</h1>
      <ul style="float:left; width:100%; margin-bottom:45px; border-bottom: 1px solid #001c2f;" id="bilateral_filtering_mutilview_show">
         <h1>双边滤波:</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>  
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>
    
      <ul style="float:left; width:100%; margin-bottom:45px; border-bottom: 1px solid #001c2f;" id="binarization_mutilview_show"> 
         <h1>离散化处理:</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>  
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>
      <ul style="float:left; width:100%; margin-bottom:45px; border-bottom: 1px solid #001c2f;" id="canny_mutilview_show">
         <h1>Canny边缘检索 :</h1>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>  
         <li><div><img src="http://39.98.244.125:8002/static/images/14/14_0.png"></div></li>
      </ul>
   
    <ul style="float:left; width:100%; margin-bottom:45px; border-bottom: 1px solid #001c2f;" id="inter_blur_mutilview_show">
         <h1>区域插值模糊:</h1>
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


<script >
import $ from "jquery";
export default {
  name: "Calculate",
  components: {},
}

$(function () {
     $("input[name='radio']").on("change",function(event) { 
                var value1 = $("input[name='radio']:checked").val();
                // alert("选中的radio的值是：" + a); 
                var submitObj={
                    "protrin_class":value1
                    };

                // console.log(formData);
                // if ($('#uploadForm').get(0).files[0]) {
                //   alert("请选择文件");
                //   return;
                // }
                var timer1;
                var count = 0;
                $.ajax({
                    type: 'post',
                    url: "http://39.98.244.125:8002/propressing_show/",
                    // url: "http://127.0.0.1:8000/propressing_show/",
                    data: JSON.stringify(submitObj),
                    dataType:"json",
                    contentType: "application/json",
                    cache: false,
                    processData: false,
                    contentType: false,
                  success: function (data) {
                    // $('#serverResponse').text("新增节点：" + data + "个，共耗时：" + count + "秒");
                    var _data =  data.data;

                    var recode =data.code;
                    console.log(recode);
                    if (recode=="200000") {  
                    alert("数据处理不正确，请检查网络"); 
                    } else{
                    var ori_mutilview_url = _data.ori_mutilview_url;
                    var bilateral_filtering_mutilview_url = _data.bilateral_filtering_mutilview_url;
                    var binarization_mutilview_url = _data.binarization_mutilview_url;
                    var canny_mutilview_url = _data.canny_mutilview_url;
                    var inter_blur_mutilview_url = _data.inter_blur_mutilview_url;
                    var _time = _data.time;
                    console.log(ori_mutilview_url)
                    console.log(bilateral_filtering_mutilview_url)
                    console.log(binarization_mutilview_url)
                    console.log(canny_mutilview_url)
                    console.log(inter_blur_mutilview_url)
                    $("#propressingtime").empty();
                    $("#propressingtime").append(_time);
                    
                    var str1 = "";
                    $.each(ori_mutilview_url, function(i, obj) {
                        // 原始图像
                        str1 += '<li style="float:left; width:20%; margin:10px 10px;" id="ori_mutilview_show1"><div>';

                        str1 += '<img src="' + obj + '"></div></li>';

                      });
                    // console.log(str1)

                   $("#ori_mutilview_show").empty();
                   $("#ori_mutilview_show").append(str1);
                   
                   str1 =""
                  $.each(bilateral_filtering_mutilview_url, function(i, obj) {
                        // 双边滤波
                        str1 += '<li style="float:left; width:20%;margin-bottom:45px; margin:10px 10px;" id="bilateral_filtering_mutilview_show1"><div>';

                        str1 += '<img src="' + obj + '"></div></li>';

                      });
                    // console.log(str1)

                   $("#bilateral_filtering_mutilview_show").empty();
                   $("#bilateral_filtering_mutilview_show").append(str1);
                                      
                   str1 =""
                  $.each(binarization_mutilview_url, function(i, obj) {
                        // 离散化处理
                        str1 += '<li style="float:left;  width:20%;margin-bottom:45px; margin:10px 10px;" id="binarization_mutilview_show1"><div>';

                        str1 += '<img src="' + obj + '"></div></li>';

                      });
                    // console.log(str1)

                   $("#binarization_mutilview_show").empty();
                   $("#binarization_mutilview_show").append(str1);
                                      
                   str1 =""
                  $.each(canny_mutilview_url, function(i, obj) {
                        // Canny边缘检索
                        str1 += '<li style="float:left;  width:20%;margin-bottom:45px; margin:10px 10px;" id="canny_mutilview_show1"><div>';

                        str1 += '<img src="' + obj + '"></div></li>';

                      });
                    // console.log(str1)

                   $("#canny_mutilview_show").empty();
                   $("#canny_mutilview_show").append(str1);
                                      
                   str1 =""
                  $.each(inter_blur_mutilview_url, function(i, obj) {
                        // 区域插值模糊
                        str1 += '<li style="float:left;  width:20%;margin-bottom:45px; margin:10px 10px;" id="inter_blur_mutilview_show1"><div>';

                        str1 += '<img src="' + obj + '"></div></li>';
                      });
                    // console.log(str1)

                   $("#inter_blur_mutilview_show").empty();
                   $("#inter_blur_mutilview_show").append(str1);
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
    height: 10px;
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
    height: 16px;
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
