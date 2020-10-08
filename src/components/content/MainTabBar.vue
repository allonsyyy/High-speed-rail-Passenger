<template>
    <van-tabbar route v-model="active" active-color="#02AC81" inactive-color="#A3A8B2">
        <van-tabbar-item replace to="/home" icon="home-o" >
            首页
        </van-tabbar-item>
        <van-tabbar-item replace to="/shopping" icon="search">
            购物
        </van-tabbar-item>
        <van-tabbar-item replace to="/scenic" icon="search">
            景点
        </van-tabbar-item>
        <van-tabbar-item replace to="/message" icon="search">
            消息
        </van-tabbar-item>
        <van-tabbar-item replace to="/profile" icon="search">
            我的
        </van-tabbar-item>
    </van-tabbar>
    
</template>

<script>
    export default {
        name: "MainTabBar",
        components: {

        },
        data() {
            return{
                active: 'home',

            }
        }
    }
</script>

<style scoped  lang="less">
    .van-tabbar{
        width: 100%;
        height: 49px;
        background-color: @white;
        .van-tabbar-item{
            font-size: 11px;
            font-weight: 400;
            line-height: @line-height-sm;
        }

    }



</style>