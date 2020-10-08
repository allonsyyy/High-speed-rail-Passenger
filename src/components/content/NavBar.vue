<template>
    <div class="nav-bar">
        <van-nav-bar
                title="高铁乘务"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less">
    /*@import "../../assets/styles/custom.less";*/
    /*@import "~@assets/styles/custom.less";*/


    .nav-bar {
        .van-nav-bar {
            width: 100%;
            height: 64px;
            letter-spacing: -0.56px;
            background-color: @green;
            line-height: @line-height-lg;

            .van-nav-bar__title {
                color: @white;
            }
        }
    }

</style>