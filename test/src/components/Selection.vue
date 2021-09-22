<template>
    <div>
        <p class="title">支付方式</p>
        <section class="selectPay">
            <ul class="payBox active" id="payBox">
                <li class="payWay" v-for="(item,index) in payList" :key="item.id" @click="addImg(index,item)">
                    <span>{{item}}</span>
                    <span class="chooseIcon" :class="payIndex==index?'active':''"></span>
                </li>
            </ul>
        </section>
        <p v-if="payList.length>3" class="useMore"><span class="moreBtn" @click="useMore">使用更多</span></p>
    </div>
</template>

<script>
    export default {
          name: "Selection",
          components:{},
        data() {
            return {
                payList: ["微信支付", "支付宝支付", "线下支付", '其他支付'],
                payIndex: 0, //默认选中第一个
                isBlanced: true //用于取消选中
            }
        },
        methods: {
            addImg: function(index, item) { //选择支付方式
                let _this = this;
                _this.isBlanced = !_this.isBlanced;
                if (_this.payIndex == index) {
                    if (!_this.isBlanced) {
                        _this.payIndex = -1;
                    } else {
                        _this.payIndex = index;
                    }
                } else {
                    _this.payIndex = index;
                }
            },
            useMore() { //查看更多
                let payBox = document.getElementById('payBox'),
                    moreBtn = document.getElementsByClassName('moreBtn')[0];
                if (this.hasClass(payBox, 'active')) {
                    this.removeClass(payBox, 'active');
                    moreBtn.innerHTML = "收起";
                } else {
                    this.addClass(payBox, 'active');
                    moreBtn.innerHTML = "展开全部";
                }
            },
            hasClass(el, cl) {
                var clArr = el.className.split(' ');
                if (clArr.indexOf(cl) != -1) {
                    return clArr;
                } else {
                    return false;
                }
            },
            addClass(el, cl) {
                if (!this.hasClass(el, cl)) {
                    var oldcl = el.className;
                    el.className = oldcl ? oldcl + ' ' + cl : cl;
                }
            },
            removeClass(el, cl) {
                var clArr = this.hasClass(el, cl);
                if (clArr) {
                    clArr.splice(clArr.indexOf(cl), 1);
                    el.className = clArr.join(' ');
                }
            }
        }

    }
</script>

<style scoped>
    div {
        font-size: 16px;
        background: #fff;
    }

    .title {
        font-size: 20px;
        padding: .1rem 0;
        border-bottom: 1px solid #eee;
    }

    .payBox.active {
        max-height: 1.8rem;
        overflow: hidden;
    }

    .payWay {
        height: .6rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        padding: 0 .15rem;
        align-items: center;
        justify-content: space-between;
    }

    .chooseIcon {
        width: .2rem;
        height: .2rem;
        display: inline-block;
        /* background: url(../assets/images/shopMall/noselect2.png)no-repeat; */
        background-size: 100%;
    }

    .chooseIcon.active {
        width: .2rem;
        height: .2rem;
        display: inline-block;
        /* background: url(../assets/images/shopMall/hasSelect1.png)no-repeat; */
        background-size: 100%;
    }

    .useMore {
        color: #fe6903;
        background: #fff;
        padding: .1rem 0 .2rem 0;
    }
</style>