<template>
    <div class="view-wrapper">
        <img src="~src/assets/images/logo-xl.png" alt="北京银行" class="logo" />
        <div class="view-bg"></div>
        <div class="view-inner">
            <div class="header-section">
                <h1>欢迎使用</h1>
                <p>零售客户经理管理系统</p>
            </div>
            <div class="form-section">
                <div class="form-cell">
                    <label class="form-box" for="username">
                        <span class="form-label">账号</span>
                        <span class="form-value">
                            <input type="text" id="username" v-model="username" placeholder="请输入工号"/>
                        </span>
                        <i class="el-icon-error" v-show="username" @click="username = ''"></i>
                    </label>
                    <p class="form-err"></p>
                </div>
                <div class="form-cell">
                    <label class="form-box" for="password">
                        <span class="form-label">密码</span>
                        <span class="form-value">
                            <input type="password" id="password" v-model="password" placeholder="请输入密码"/>
                        </span>
                        <i class="el-icon-error" v-show="password" @click="password = ''"></i>
                    </label>
                    <p class="form-err"></p>
                </div>
                <el-button
                    class="form-button"
                    :disabled="computedDisabled"
                    @click="handleSubmit"
                    :loading="isLoading"
                    type="primary"
                >{{ isLoading ? '登录中...' : '立即登录'}}</el-button>
                <div class="form-cell">
                    <el-checkbox v-model="isRemember">记住密码</el-checkbox>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                isRemember: false,
                username: '',
                password: '',
                isLoading: false,
            };
        },
        computed: {
            computedDisabled () {
                return !this.username || !this.password;
            }
        },
        created () {
            this.assignmentData();
        },
        methods: {
            assignmentData () {
                this.isRemember = this.$storage.local.get('$$IS_REMEMBER', false);
                if (!this.isRemember) {
                    return this.$storage.local.del('$$ACCOUNT_INFO');
                }
                let { username = '', password = '' } = this.$storage.local.get('$$ACCOUNT_INFO', {});
                this.username = username;
                this.password = password;
            },
            handleSubmit () {
                this.isLoading = true;
                let options = {
                    username: this.username,
                    password: this.password,
                };
                this.$store.dispatch('user/' + 'ACTION_USER_LOGIN', options).then(() => {
                    this.$storage.local.set('$$IS_REMEMBER', this.isRemember);
                    this.isRemember
                        ? this.$storage.local.set('$$ACCOUNT_INFO', options)
                        : this.$storage.local.del('$$ACCOUNT_INFO');
                    this.$router.push('/');
                }).toast().finally(() => {
                    this.isLoading = false;
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define.scss";
    .view-wrapper{
        @extend %h100;
        @extend %df;
        @extend %aic;
        background-color: #c90b1a;

        ::-webkit-input-placeholder { color: #ccc; }
        :-moz-placeholder { color: #ccc; }
        ::-moz-placeholder { color: #ccc; }
        :-ms-input-placeholder { color: #ccc; }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0 1000px #fff inset !important; }

    }
    .view-bg{
        @extend %df1;
        @extend %h100;
        background: url("~src/assets/images/login-bg.jpg") no-repeat;
        background-size: cover;
    }
    .view-inner{
        @extend %df;
        @extend %aic;
        @extend %jcc;
        @extend %h100;
        @extend %fdc;
        width: 55.2%;
        background-color: #fff;
    }
    .logo{
        @extend %pa;
        width: j(180);
        height: auto;
        top: j(30);
        left: j(30);
    }
    .header-section{
        width: j(500);
        h1{
            font-size: j(32);
            line-height: j(45);
            color: $color_main;
        }
        p{
            @extend %c9;
            margin-top: j(10);
            font-size: j(18);
        }
    }
    .form-section{
        margin-top: j(40);
        width: j(500);
    }
    .form-cell{
        margin-top: j(10);
    }
    .form-box{
        @extend %bsb;
        @extend %df;
        @extend %aic;
        @include tst(border, .3s);
        height: j(50);
        border: 1px solid #C9C9C9;
        border-radius: j(6);
        padding-right: j(20);
        .el-icon-error{
            @extend %cp;
            color: #bbb;
        }
        &:focus-within{
            border: 1px solid $color_main;
        }
    }
    .form-label{
        @extend %c9;
        @extend %fwn;
        @extend %df;
        @extend %aic;
        @extend %jcc;
        width: j(80);
        font-size: j(16);
    }
    .form-value{
        @extend %df1;
        @extend %h100;
        font-size: j(16);
        input{
            @extend %w100;
            @extend %bsb;
            @extend %h100;
            padding: 0 j(20);
            border: none;
            /*background: transparent;*/
        }
    }
    .form-err{
        @extend %df;
        @extend %aic;
        color: $color_main;
        padding: 0 j(10);
        font-size: j(12);
        height: j(30);
    }
    .form-button{
        @extend %w100;
        height: j(50);
        margin: j(20) 0;
    }
</style>
