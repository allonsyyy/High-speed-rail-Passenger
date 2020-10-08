<template>
    <div class="tags-box">
        <div class="tag">
            <van-tag color="#02AC81" plain>推荐二刷</van-tag>
            <div class="tag-amount">5555人</div>
        </div>
        <div class="tag van-hairline--left van-hairline--right">
            <van-tag color="#498AFE" plain>一般</van-tag>
            <div class="tag-amount">320人</div>
        </div>
        <div class="tag">
            <van-tag color="#FE642B" plain>不想去</van-tag>
            <div class="tag-amount">5555人</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'OpinionTags'
    };
</script>

<style lang="less">
    .tags-box{
        /*width: 164px;*/
        /*height: auto;*/
        display: flex;
        margin: 7px 0 5px 0;
        .tag{
            position: relative;
            flex: none;
            text-align: center;
            box-sizing: border-box;
            &:nth-child(1) {
               padding-right: 10px;
            }
            &:nth-child(2) {
                padding:0 10px;
            }
            &:nth-child(3) {
                padding-left:10px;
            }
            .van-tag{
                line-height: 14px;
                padding: 1px 5px;
            }
        }
        .tag-amount{
            font-size: 10px;
            font-weight: 400;
            letter-spacing:-0.41px;
            color: #9E9E9E;
            line-height: 14px;
            margin-top: 1px;
        }
    }

</style>