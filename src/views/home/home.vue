<template>
    <div id="home">

        <div class="home-banner">
            <img src="" alt="">
        </div>

        <TrainInfo></TrainInfo>

        <TrainServe></TrainServe>

        <div class="titleTags">
            <span class="tag-content">沿途资讯</span>
            <span class="tag-more">查看更多 ></span>
        </div>

        <AlongNews></AlongNews>

        <div class="titleTags">
            <span class="tag-content">旅游推荐</span>
            <span class="tag-more">查看更多 ></span>
        </div>

        <TourListContent></TourListContent>

    </div>

</template>

<script>
    import TourListContent from '@components/content/TourListContent'
    import TrainInfo from '@components/common/TrainInfo'
    import TrainServe from '@components/content/TrainServe'
    import AlongNews from '@components/content/AlongNews'

    export default {
        name: "home",
        data() {
            return {

            };
        },
        components: {
            TrainInfo,
            TrainServe,
            AlongNews,
            TourListContent
        },

    }
</script>

<style  lang="less">
    @import "~@assets/styles/custom.less";
    #home{
        .home-banner{
            width: 100%;
            height: 145px;
            background-color: #646566;
        }
        #trainInfo{
            margin-top: -16px;
        }
        #trainServe{
            margin-top: -20px;

        }
        .titleTags{
            padding:26px 15px 17px 15px;
            overflow: hidden;
            .tag-content{
            @title-tags();
            }
            .tag-more{
            @tag-more();
            }
        }

    }





</style>