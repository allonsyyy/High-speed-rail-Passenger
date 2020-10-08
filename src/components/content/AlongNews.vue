<template>
    <div id="alongNews">
        <div class="along-news-box">
            <div class="news-item van-hairline--bottom" >
                <van-row>
                    <van-col span="15">
                        <div class="news-title">贵州铁路客运站办理临时身份证明 无需提供照片</div>
                        <div class="news-des van-ellipsis">(记者 曾秦）细心的旅客发现，贵阳细心的旅客发现，贵</div>
                    </van-col>
                    <van-col span="7" offset="2">
                        <div class="news-pic"><img src="~@assets/images/common/xx.jpg" alt=""></div>

                    </van-col>
                </van-row>

            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "AlongNews",
        // data:{
        //     newsItems:[
        //         {
        //             titlt:"贵州铁路客运站办理临时身份证明 无需提供照片",
        //             des:"(记者 曾秦）细心的旅客发现，贵阳细心的旅客发现，贵",
        //             img:require("@assets/images/common/xx.jpg")
        //         },
        //         {
        //             titlt:"贵州铁路客运站办理临时身份证明 无需提供照片",
        //             des:"(记者 曾秦）细心的旅客发现，贵阳细心的旅客发现，贵",
        //             img:require("@assets/images/common/xx.jpg")
        //         },
        //     ]
        // }

    }
</script>

<style lang="less">
    .along-news-box{
        @content__case();
        .van-col{
            .news-title{
                font-size: 15px;
                color: #333333;
                letter-spacing: -0.53px;
                line-height: 21px;
                font-weight: 600;
            }
            .news-des{
                width: 180px;
                height: auto;
                font-size: 11px;
                color: #9E9E9E;
                letter-spacing: -0.44px;
                line-height: 16px;
                padding: 14px 0 15px 0;
            }
            .news-pic{

                img{
                    width: 92px;
                    height:68px;
                    border-radius: 4px;

                }

            }

        }

    }

</style>