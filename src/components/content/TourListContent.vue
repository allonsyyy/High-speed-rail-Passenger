<template>
        <div class="tour-content-box ">
            <div class="tour-item van-hairline--bottom">

                <van-row type="flex" justify="space-between">

                    <van-col span="8" class="tour-content__thumb">
                        <div class="tour-content__tag">铁友推荐</div>
                        <div class="tour-content__img">
                            <img src="" alt="">
                        </div>
                    </van-col>

                    <van-col span="15" class="tour-content__text">
                        <div class="tour-content__title">成都欢乐谷游乐场</div>

                        <OpinionTags></OpinionTags>

                        <div class="tour-content__des">距离市中心11.8km 熊猫基地附近</div>

                        <van-row type="flex" justify="space-between" class="tour-content__other">
                            <van-col span="7" class="tour-content__dis">2344评论</van-col>
                            <van-col span="8" class="tour-content__val">
                                <span>￥</span>
                                <span>360</span>
                                <span>起</span>
                            </van-col>

                        </van-row>


                    </van-col>

                </van-row>

            </div>


        </div>


</template>

<script>
    import OpinionTags from '@components/content/OpinionTags';

    export default {
        name: 'TourListContent',
        data() {
            return {
                tourlist: [
                    {
                        title: '成都欢乐谷游乐场',
                        des: '距离市中心11.8km 熊猫基地附近',
                        dis: '2344评论',
                        val: 360,
                        tag_1: 2344,
                        tag_2: 320,
                        tag_3: 260,
                        recommend: true
                    }, {
                        title: '冰岛体验馆',
                        des: '层距您12.3km 望平街',
                        dis: '2344评论',
                        val: 360,
                        tag_1: 2344,
                        tag_2: 320,
                        tag_3: 260,
                        recommend: true
                    }
                ]

            };
        },
        components: {
            OpinionTags

        },
        methods: {}
    };
</script>

<style lang="less">
    .tour-content-box {
        @content__case();


        .tour-content__thumb {
            position: relative;
            flex: none;
            width: 109px;
            height: 100px;
            /*margin-right: 19px;*/

            .tour-content__tag {
                position: absolute;
                top: 11px;
                left: 49px;
                @tour-tag();

            }

            .tour-content__img {
                width: 100%;
                height: 100%;
                background-color: #9E9E9E;
                border-radius: 4px;
            }
        }

        .tour-content__text {
            .tour-content__title {
                @title-rules-4();
            }

            .tour-content__des {
                @des-rules();

            }

            .tour-content__other {
                width: 100%;
                height: 33px;

                .tour-content__dis {
                    font-size: 12px;
                    font-weight: 400;
                    color: #999999;
                    line-height: 24px;
                }

                .tour-content__val {

                    color: @yellow;
                    line-height: 22px;

                    span {
                        &:nth-child(1) {
                            font-size: @font-size-md;
                        }

                        &:nth-child(2) {
                            font-size: 22px;
                            line-height: 27px;
                            font-weight: bold;
                        }

                        &:nth-child(3) {
                            font-size: @font-size-sm;
                        }
                    }


                }
            }

        }


    }


</style>