<template>
    <div class="navbar">
        <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
        <breadcrumb class="breadcrumb-container" />
        <div class="right-menu">
            <el-tooltip content="全屏" effect="dark" placement="bottom">
                <screenfull id="screenfull" class="right-menu-item hover-effect"></screenfull>
            </el-tooltip>
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img src="~src/assets/images/avatar.png" class="user-avatar">
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown" class="user-dropdown">
                    <router-link to="/password/change">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                    </router-link>
                    <el-dropdown-item>
                        <span style="display:block;" @click="handleLogout">安全退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Breadcrumb from 'src/layout/components/Breadcrumb'
    import Hamburger from 'src/layout/components/Hamburger'

    export default {
        components: {
            Breadcrumb,
            Hamburger
        },
        computed: {
            ...mapGetters([
                'sidebar',
            ]),
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('app/toggleSideBar')
            },
            handleLogout() {
                this.$confirm('确认退出该账号?', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    return this.$store.dispatch('user/' + 'ACTION_USER_LOGOUT');
                }).null();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define.scss";
    .navbar {
        height: 50px;
        overflow: hidden;
        position: relative;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);

        .hamburger-container {
            line-height: 46px;
            height: 100%;
            float: left;
            cursor: pointer;
            transition: background .3s;
            -webkit-tap-highlight-color:transparent;

            &:hover {
                background: rgba(0, 0, 0, .025)
            }
        }

        .breadcrumb-container {
            float: left;
        }
        .right-menu {
            @extend %df;
            @extend %aic;
            float: right;
            height: 100%;
            &:focus {
                outline: none;
            }
            .right-menu-item {
                @extend %df;
                @extend %aic;
                @extend %jcc;
                padding: 0 8px;
                height: 100%;
                font-size: 18px;
                color: #5a5e66;
                *{
                    @extend %db;
                }
                &.hover-effect {
                    cursor: pointer;
                    transition: background .3s;
                    &:hover {
                        background: rgba(0, 0, 0, .025)
                    }
                }
            }
            .avatar-container {
                @extend %h100;
                padding: 0 30px 0 10px;
                .avatar-wrapper {
                    @extend %cp;
                    @extend %df;
                    @extend %aic;
                    @extend %h100;
                    position: relative;
                    span{
                        font-size: 20px;
                    }
                    .user-avatar {
                        margin-right: 10px;
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                    }

                    .el-icon-caret-bottom {
                        cursor: pointer;
                        position: absolute;
                        right: -20px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
