<template>
    <div id="trainServe">
        <div class="serve-box">
            <div class="van-hairline--bottom">
                <van-cell  title="选择站点" is-link value="请选择" icon="location-o" >
                </van-cell>
            </div>


            <div class="van-hairline--bottom">
                <van-cell class="remind-time"  title="提醒时间" is-link value="提前五分钟" icon="location-o" >
                </van-cell>
            </div>

            <van-button type="primary" size="large">设置到站提醒</van-button>

            <van-grid :border="false" >
                <van-grid-item  icon="photo-o" text="支部情况" />
                <van-grid-item icon="photo-o" text="咨询支部" />
                <van-grid-item icon="photo-o" text="点赞评价" />
                <van-grid-item icon="photo-o" text="关于我" />
            </van-grid>



        </div>
    </div>

</template>

<script>
    export default {
        name: "Trainserve"
    }
</script>

<style lang="less">
    .serve-box {
        @content__case();
        padding-bottom: 2px;
        .van-hairline--bottom{
            @cell();
            .van-cell{
                padding:12px 0;
                .van-cell__title{
                    @serve-text();
                }
            }
            .remind-time{
                .van-cell__value{
                    @serve-text();
                }
            }
        }
        .van-button{
            font-size: 16px;
            letter-spacing: -0.38pt;
            border-radius: 5px;
            margin: 25px 0 2px 0;
            border: none;
            background: @gradient-green-button;
        }
        .van-grid{
            border: none;

        }


    }



</style>