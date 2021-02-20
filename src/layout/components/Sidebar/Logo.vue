<template>
    <div class="sidebar-logo-container">
        <transition name="sidebarLogoFade">
            <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
                <img src="~src/assets/images/logo.png" class="sidebar-logo">
                <h1 class="sidebar-title">北京银行</h1>
            </router-link>
            <router-link v-else key="expand" class="sidebar-logo-link" to="/">
                <img src="~src/assets/images/logo-text.png" class="sidebar-logo sidebar-text-logo">
                <h1 class="sidebar-title">北京银行</h1>
            </router-link>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'SidebarLogo',
        props: {
            collapse: {
                type: Boolean,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define.scss";
    .sidebarLogoFade-enter-active {
        transition: opacity 1.5s;
    }
    .sidebarLogoFade-enter,
    .sidebarLogoFade-leave-to {
        opacity: 0;
    }
    .sidebar-logo-container {
        @extend %pr;
        @extend %oh;
        @extend %w100;
        height: 50px;
        background-color: #2b2f3a;
    }
    .sidebar-logo-link {
        @extend %w100;
        @extend %h100;
        @extend %df;
        @extend %aic;
        @extend %jcc;
    }
    .sidebar-logo {
        width: 32px;
        height: 32px;
        &.sidebar-text-logo{
            width: auto;
        }
    }
    .sidebar-title {
        @extend %pa;
        font-size: 0;
        height: 0;
        width: 0;
        text-indent: 200px;
    }
</style>
