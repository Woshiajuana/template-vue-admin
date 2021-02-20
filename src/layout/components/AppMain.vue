<template>
    <section class="app-main">
<!--        <transition name="fade-transform" mode="out-in">-->
            <router-view :key="key" class="app-inner" />
<!--        </transition>-->
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define.scss";
    .app-main {
        @extend %w100;
        @extend %pr;
        @extend %bsb;
        /*min-height: calc(100vh - 50px);*/
        padding-bottom: j(16);
    }
    .fixed-header+.app-main {
        padding-top: 50px;
    }
    .hasTagsView {
        .app-main {
            /*min-height: calc(100vh - 84px);*/
            /*height: 100%;*/
            min-height: 100%;
        }
        .fixed-header+.app-main {
            padding-top: 84px;
        }
    }
    .el-popup-parent--hidden {
        .fixed-header {
            padding-right: 15px;
        }
    }
    .app-inner{
        padding: j(16) j(16) 0;
    }
    .view-inner{
        @extend %boxs;
        padding: j(30) j(16);
        background-color: #fff;
        border-radius: j(5);
        margin: j(16);
        .el-form {
            width: 460px;
        }
    }
</style>

