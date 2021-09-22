<template>
    <div class="show">
        <div class="top">
            <img src="../assets/images/7.png" />
            <a href="javascript:history.back(-1);"
                ><i class="fa fa-long-arrow-left"></i> 返回首页</a
            >
        </div>

        <div class="content">
            <div class="left">
                <!-- <div class="catList" style="height:570px;">     -->
                <div class="nav">
                    <div class="box01">
                        <h1>数据预处理</h1>
                        <ul>
                            <!-- <div id='app'>
      <input type="radio" name="test" v-for="(item,index) in list" :key="item" :value="item.value" :checked="item.isCheck" @change="changeInput(index)">
      <button @click="test">获取选中的值</button>
    </div> -->
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        class="selectTag"
                                        id="radio11"
                                        name="1"
                                        value="bilateral_filtering"
                                    /><label for="radio11">双边滤波</label></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        class="selectTag"
                                        id="radio12"
                                        name="1"
                                        value="binarization"
                                    /><label for="radio12">离散化处理</label></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        class="selectTag"
                                        id="radio13"
                                        name="1"
                                        value="canny"
                                    /><label for="radio13"
                                        >区域插值模糊</label
                                    ></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        class="selectTag"
                                        id="radio14"
                                        name="1"
                                        value="inter_blur"
                                    /><label for="radio14"
                                        >canny边缘检测</label
                                    ></a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="box02">
                        <h1>数据归一化</h1>
                        <ul>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        class="selectTag"
                                        id="radio21"
                                        name="2"
                                        value="maxpool"
                                    /><label for="radio21">均值归一化</label></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        class="selectTag"
                                        id="radio22"
                                        name="2"
                                        value="meanpool"
                                    /><label for="radio22"
                                        >标准差归一化</label
                                    ></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        class="selectTag"
                                        id="radio23"
                                        name="2"
                                        value="mixpool'"
                                    /><label for="radio23"
                                        >Sigmoid变换归一化</label
                                    ></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        class="selectTag"
                                        id="radio24"
                                        name="2"
                                        value="softmax"
                                    /><label for="radio24"
                                        >Softmax变换归一化</label
                                    ></a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="box03">
                        <h1>数据降维</h1>
                        <ul>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        id="radio31"
                                        name="3"
                                    /><label for="radio31">主成分分析</label></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        id="radio32"
                                        name="3"
                                    /><label for="radio32"
                                        >线性判别分析</label
                                    ></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        id="radio33"
                                        name="3"
                                    /><label for="radio33">支持向量机</label></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        id="radio34"
                                        name="3"
                                    /><label for="radio34">随机森林</label></a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="box04">
                        <h1>聚类</h1>
                        <ul>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        id="radio41"
                                        name="4"
                                    /><label for="radio41"
                                        >K-means聚类</label
                                    ></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        id="radio42"
                                        name="4"
                                    /><label for="radio42">密度聚类</label></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        id="radio43"
                                        name="4"
                                    /><label for="radio43">模糊聚类</label></a
                                >
                            </li>
                            <li>
                                <a
                                    ><input
                                        type="radio"
                                        id="radio44"
                                        name="4"
                                    /><label for="radio44">谱聚类</label></a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- </div> -->
                <ul>
                    <li style="float: right">
                        <input
                            type="button"
                            class="button"
                            value="开始"
                            @click="get()"
                        />
                    </li>
                </ul>
            </div>

            <div class="right">
                <div class="left_t"></div>
                <div class="left_l"></div>
                <div class="left_rb"></div>
                <div class="left_br"></div>
                <div class="chul">
                    <div class="fl">聚类时间：<span>1254秒</span></div>
                </div>
                <div class="yxlpm">
                    <ul>
                        <highcharts
                            :options="chartOptions"
                            :callback="myCallback"
                        ></highcharts>
                    </ul>
                </div>
                <div id="graph" style="width: 90%; height: 180px"></div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
// import CommonChart from "../components/CommonChart";
import { Chart } from 'highcharts-vue'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(Highcharts)
import axios from 'axios'
import $ from 'jquery'
export default {
    name: 'Show',
    components: {
        highcharts: Chart,
    },
    data() {
        return {
            chartData: [],
            chartOptions: {
                chart: {
                    type: 'scatter',
                    zoomType: 'xy',
                },
                title: {
                    text: '蛋白质聚类展示',
                },
                xAxis: {
                    title: {
                        enabled: true,
                        text: '',
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true,
                },
                yAxis: {
                    title: {
                        text: '',
                    },
                },
                legend: {
                    enabled: false,
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 100,
                    y: 70,
                    floating: true,
                    // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                    borderWidth: 1,
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 5,
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)',
                                },
                            },
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false,
                                },
                            },
                        },
                        tooltip: {
                            headerFormat: '<b>{series.name}</b><br>',
                            pointFormat: '{point.x}, {point.y}',
                        },
                    },
                },
                series: [
                    {
                        color: 'rgba(223, 0, 83, .5)',
                        data: [
                            [174.0, 65.6],
                            [175.3, 71.8],
                            [193.5, 80.7],
                            [186.5, 72.6],
                            [187.2, 78.8],
                            [181.5, 74.8],
                            [184.0, 86.4],
                            [184.5, 78.4],
                            [175.0, 62.0],
                            [184.0, 81.6],
                            [180.0, 76.6],
                            [177.8, 83.6],
                            [192.0, 90.0],
                            [176.0, 74.6],
                            [174.0, 71.0],
                            [184.0, 79.6],
                        ],
                    },
                    {
                        color: 'rgba(119, 152, 191, .5)',
                        data: [
                            [174.0, 65.6],
                            [175.3, 71.8],
                            [193.5, 80.7],
                            [186.5, 72.6],
                            [187.2, 78.8],
                            [181.5, 74.8],
                            [184.0, 86.4],
                            [184.5, 78.4],
                            [175.0, 62.0],
                            [184.0, 81.6],
                            [180.0, 76.6],
                        ],
                    },
                ],
            },
        }
    },
    methods: {
        get() {
            var value = []
            var radio = document.getElementsByClassName('selectTag')
            for (var i = 0; i < radio.length; i++) {
                if (radio[i].checked == true) {
                    value.push(radio[i].value)
                }
            }

            var submitObj = {
                propressing: value[0],
                normalized: value[1],
                dimensionality_reduction: 'PCA',
                cluster: 'kmeans',
            }
            console.log(submitObj)

            axios({
                url: 'http://39.98.244.125:8002/cluster/',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(submitObj),
            })
                .then((data) => {
                    this.getChartDataSucc(data)
                })
                .catch(function (error) {
                    console.log(error)
                    alert('获取数据失败，请重试~')
                })
        },
        getChartDataSucc(data) {
            console.log(data)
            this.chartData = data.data.series
            this.chartOptions = {
                chart: {
                    type: 'scatter',
                    zoomType: 'xy',
                },
                title: {
                    text: '蛋白质聚类展示',
                },
                xAxis: {
                    title: {
                        enabled: true,
                        text: '',
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true,
                },
                yAxis: {
                    title: {
                        text: '',
                    },
                },
                legend: {
                    enabled: false,
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 100,
                    y: 70,
                    floating: true,
                    // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                    borderWidth: 1,
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 5,
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)',
                                },
                            },
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false,
                                },
                            },
                        },
                        tooltip: {
                            headerFormat: '<b>{series.name}</b><br>',
                            pointFormat: '{point.x}, {point.y}',
                        },
                    },
                },
                series: [
                    {
                        color: 'rgba(223, 0, 83, .5)',
                        data: [
                            [174.0, 65.6],
                            [175.3, 71.8],
                            [193.5, 80.7],
                            [186.5, 72.6],
                            [187.2, 78.8],
                            [181.5, 74.8],
                            [184.0, 86.4],
                            [184.5, 78.4],
                            [175.0, 62.0],
                            [184.0, 81.6],
                            [180.0, 76.6],
                            [177.8, 83.6],
                            [192.0, 90.0],
                            [176.0, 74.6],
                            [174.0, 71.0],
                            [184.0, 79.6],
                        ],
                    },
                    {
                        color: 'rgba(119, 152, 191, .5)',
                        data: [
                            [174.0, 65.6],
                            [175.3, 71.8],
                            [193.5, 80.7],
                            [186.5, 72.6],
                            [187.2, 78.8],
                            [181.5, 74.8],
                            [184.0, 86.4],
                            [184.5, 78.4],
                            [175.0, 62.0],
                            [184.0, 81.6],
                            [180.0, 76.6],
                        ],
                    },
                ],
            }
            // Highcharts.setOptions(this.chartOptions)
        },
        drawChart() {
            Highcharts.setOptions(this.chartOptions)
        },
    },
    watch: {
        chartOptions() {
            console.log(this.chartData)
            this.chartOptions.series = this.chartData
            this.drawChart()
        },
    },
}
</script>

<style scoped>
.top {
    margin: 0 auto;
    height: 90px;
    text-align: center;
    position: relative;
}
.top a {
    position: absolute;
    right: 25px;
    top: 30px;
    background-color: rgb(68, 116, 138);
    border: 1px solid #fff;
    padding: 3px 10px;
    color: #fff;
    font-size: 14px;
}
.top a .fa-long-arrow-left {
    width: 15px;
    font-weight: bold;
}
.top01 {
    margin: 0 auto;
    height: 65px;
    position: relative;
    padding: 0 25px;
}
.top01 a {
    position: absolute;
    right: 25px;
    top: 15px;
    background-color: rgb(68, 116, 138);
    border: 1px solid #fff;
    padding: 3px 10px;
    color: #fff;
    font-size: 14px;
}
.top01 a .fa-long-arrow-left {
    width: 15px;
    font-weight: bold;
}

.menu {
    margin: 0 25px;
    height: 42px;
    background-color: #477491;
}
.menu ul li {
    float: left;
}
.menu ul li a {
    display: block;
    line-height: 42px;
    color: #fff;
    padding: 0 20px;
}
.menu ul li a:hover {
    background-color: #024e80;
}
.active a {
    background-color: #024e80;
}

.content {
    margin: 0 25px;
    position: relative;
    margin-top: 10px;
    margin-bottom: 25px;
}
.content .left_t {
    position: absolute;
    top: -1px;
    left: 0;
    border: 2px solid #024e80;
    width: 50px;
    height: 0px;
    overflow-y: auto;
}
.content .left_l {
    position: absolute;
    top: 0;
    left: -1px;
    border: 2px solid #024e80;
    width: 0px;
    height: 50px;
}
.content .left_rb {
    position: absolute;
    bottom: -1px;
    right: 0px;
    border: 2px solid #024e80;
    width: 50px;
    height: 0px;
}
.content .left_br {
    position: absolute;
    bottom: 0px;
    right: -1px;
    border: 2px solid #024e80;
    width: 0px;
    height: 50px;
}
.left {
    position: absolute;
    left: 0;
    width: 213px;
    top: 0;
    bottom: 0;
    background-image: url(../assets/images/bg01.png);
    border: 1px solid #0082d8;
    padding-bottom: 20px;
    border-bottom: 4px solid #024e80;
}
.left h1 {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #024e80;
    line-height: 50px;
}
.left h2 {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border-bottom: 1px solid #001c2f;
    margin: 0 10px;
    line-height: 35px;
}
.left ul {
    margin: 0;
    padding: 0;
}
.left ul li {
    height: 35px;
    line-height: 35px;
    text-align: left;
    margin-left: 20px;
}

/* 单选按钮 */
.left label {
    float: inherit;
    margin: 10px;
    position: relative;
}

/* 左侧菜单 */
.nav {
    width: 213px;
    height: 760px;
}

.nav a {
    text-decoration: none; /*去掉字下划线*/
    margin: 0 30px;
    color: rgb(255, 255, 255);
}
.nav li {
    overflow: hidden; /*隐藏圆点*/
    line-height: 80px; /*行高*/
}

.nav li:hover {
    /*hover表示鼠标放上去之后的变化*/
    background-color: rgb(48, 83, 116);
}
.nav li:focus {
    background-color: rgb(48, 83, 116);
}

/* 开始按钮 */
.button {
    background-color: #2d5897;
    border: none;
    color: rgb(255, 255, 255);
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 15px 57px;
    cursor: pointer;
    border-radius: 12px;
    border: 0;
    line-height: 1;
}
/* 滑轮 */
.catList {
    /* position:relative; */
    z-index: 999;
    overflow: auto;
    height: 620px;
}

.cat_wrap {
    margin: 0 10px;
    overflow: auto;
}
.cat_wrap::-webkit-scrollbar {
    width: 5px;
    height: 16px;
    background-color: #0082d8;
}
/*定义滚动条轨道 内阴影+圆角*/
.cat_wrap::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
.cat_wrap::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
}

/* 聚类时间 */
.chul {
    margin: 10px 30px;
    line-height: 50px;
    height: 50px;
    color: #fff;
    width: 400px;
    font-size: 20px;
}
.chul .fl span {
    color: #6dbee4;
}

.right {
    margin-left: 215px;
    background-image: url(../assets/images/bg01.png);
    border: 1px solid #0082d8;
    position: relative;
}

/* 滑轮 */
.catList {
    /* position:relative; */
    z-index: 999;
    overflow: auto;
    height: 620px;
}
.catList li {
    overflow: hidden;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #fff;
}

.catList::-webkit-scrollbar {
    width: 0px;
    height: 50px;
    background-color: #0082d8;
}

.yxlpm {
    margin: 0 auto;
    min-height: 600px;
}
.yxlpm ul {
    float: left;
    width: 100%;
    height: 600px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 50px;
}
.yxlpm ul li {
    float: left;
    width: 33.33%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 50px;
}
</style>
   




