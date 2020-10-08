<template>
    <div id="trainInfo">
        <div class="train-box">
                <van-row type="flex" justify="space-between">
                    <van-col span="4">
                        <div class="outset-time time">16:18</div>
                        <div class="outset-site site">成都东站</div>
                    </van-col>
                    <van-col span="4">
                        <div class="Connection line"></div>
                    </van-col>

                    <van-col span="6">
                        <div class="train-code">
                            <img src="~@assets/images/common/train-icon.png" alt="">
                            <div>D2206</div>
                        </div>
                        <div class="train-ride-time">05小时54分</div>
                    </van-col>


                    <van-col span="4">
                        <div></div>
                    </van-col>

                    <van-col span="4">
                        <div class="arrive-time time">22:12</div>
                        <div class="arrive-site site">北京南</div>
                    </van-col>
                </van-row>



            </div>


    </div>

</template>

<script>
    export default {
        name: 'TrainInfo',
        computed:{

        }
    };
</script>

<style lang="less">
    .train-box {
        @content__case();



            .van-row {
                width: 100%;

                .van-col {
                    text-align: center;
                    align-self: center;

                    &:nth-child(4n+1) {
                        .time{
                            color: #333;
                            font-weight: 600;
                            font-size: @font-size-lg;
                            line-height: @line-height-lg;

                        }
                        .site{
                            font-size: @font-size-sm;
                            line-height: 17px;
                        }
                    }
                    &:nth-child(2){
                        div{
                            width: 100%;
                            height:1px;
                            background: linear-gradient(to right,rgba(255,255,255, 0), rgba(26, 32, 46, 0.2));
                            margin: auto;
                        }

                    }
                    &:nth-child(4){
                        div{
                            width: 100%;
                            height:1px;
                            background: linear-gradient(to left,rgba(255,255,255, 0), rgba(26, 32, 46, 0.2));
                            margin: auto;
                        }
                    }
                    &:nth-child(3){

                        .train-code{
                            display:inline-flex;
                            color: @green;
                            font-size: @font-size-md;
                            line-height: @line-height-md;

                        }
                        .train-ride-time{
                            color: #cccccc;
                            font-size: @font-size-xs;
                            line-height: @line-height-xs;

                        }
                    }


                }
            }



    }


</style>