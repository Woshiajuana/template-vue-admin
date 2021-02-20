<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    @import "~src/assets/scss/define.scss";
    #app{
        @extend %h100;
        line-height: 1.6;
    }
    .c-button{
        @extend %cfff;
        background-color: $color_main;
        border: none;
        &:hover{
            @extend %cfff;
            background-color: rgba(201, 11, 27, .8);
        }
    }
    .c-flex1{
        @extend %df1;
    }
    .c-line{
        @extend %tac;
    }
    .c-twno{
        @extend %twno;
    }
    .el-form-item__label{
        font-weight: normal;
    }
    .c-flag{
        @extend %cfff;
        @extend %dib;
        @extend %tac;
        margin-right: j(5);
        font-size: j(12);
        color: $color_main;
        padding: 0 j(4);
        height: j(20);
        line-height: j(20);
        border-radius: j(4);
        border: 1px solid $color_main;
    }
    .c-flag1{
        @extend %br50;
        @extend %cfff;
        @extend %dib;
        @extend %tac;
        margin-right: j(10);
        font-size: j(12);
        background-color: $color_main;
        width: j(28);
        height: j(28);
        line-height: j(28);
    }
    .app-inner,
    .view-inner{
        .el-select{
            @extend %w100;
        }
        .form-view{
            max-width: j(540);
        }
        .upload-view{
            @extend %df;
            @extend %aic;
            @extend %fww;
            .el-upload-list__item{
                margin-top: j(5);
                width: j(320);
            }
        }
        .el-dialog{
            margin-bottom: j(30);
        }
    }
    .el-tooltip__popper{
        max-width: j(500) !important;
    }
</style>
