<template>
    <div class="table-view">
        <div class="table-inner"
             element-loading-text="拼命加载中"
             element-loading-spinner="el-icon-loading"
             v-loading="tableQuery.isLoading">
            <el-table
                class="table"
                size="mini"
                :data="tableData"
                height="100"
                :stripe="stripe"
                :lazy="lazy"
                :load="handleLoad"
                row-key="id"
                :tree-props="treeProps"
                style="width: 100%">
                <slot></slot>
            </el-table>
        </div>
        <el-pagination
            v-if="usePagination"
            background
            size="mini"
            class="table-pagination"
            @size-change="handleEmit('refresh', 'numSize', $event)"
            @current-change="handleEmit('refresh', 'numIndex', $event)"
            :current-page="tableQuery.numIndex"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="tableQuery.numSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableQuery.numTotal">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'TableView',
        props: {
            tableQuery: { default: {} },
            tableData: { default: [] },
            stripe: { default: true },
            lazy: { default: false },
            treeProps: { default: () => ({children: 'children', hasChildren: 'hasChildren'})},
            usePagination: { default: true },
        },
        methods: {
            handleEmit (eventName, key, event) {
                if (key === 'numSize') {
                    this.tableQuery.numIndex = 1;
                }
                this.tableQuery[key] = event;
                this.$emit(eventName);
            },
            handleLoad (tree, treeNode, resolve) {
                this.$emit('load', tree, treeNode, resolve);
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "~src/assets/scss/define.scss";
    .table-view{
        @extend %df;
        @extend %fdc;
        @extend %df1;
        margin-top: j(16);
        text-align: center;
    }
    .table-inner{
        @extend %df1;
        @extend %df;
        @extend %fdc;
        @extend %boxs;
        background-color: #fff;
        padding: j(16);
        border-radius: j(5);
        min-height: calc(100vh - 275px);
    }
    .table{
        @extend %df1;
        @extend %h100;
        &:before{
            @extend %dn;
        }
    }
    .table-pagination{
        @extend %boxs;
        margin-top: j(16);
        padding: j(16) 0;
        border-radius: j(5);
        background-color: #fff;
    }
</style>
