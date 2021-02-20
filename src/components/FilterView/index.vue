
<template>
    <div class="filter-view" :class="{ 'has-filter' : isBg || filterForm }">
        <div class="filter-inner">
            <template v-for="(item, key) in filterForm">
                <el-input
                    v-if="item.mode === 'input'"
                    v-model="item.value"
                    :size="item.size || 'small'"
                    clearable
                    :maxlength="item.maxLength || 30"
                    :placeholder="item.placeholder"
                    :style="item.style"
                    class="filter-cell"
                    @keyup.enter.native="handleSearch"
                ></el-input>
                <el-select
                    v-else-if="item.mode === 'select'"
                    v-model="item.value"
                    :size="item.size || 'small'"
                    clearable
                    class="filter-cell"
                    :placeholder="item.placeholder"
                    @keyup.enter.native="handleSearch"
                    :style="item.style">
                    <el-option
                        v-for="option in item.options"
                        :key="option[item.valueKey || 'value']"
                        :label="option[item.labelKey || 'label']"
                        :value="option[item.valueKey|| 'value']"
                    ></el-option>
                </el-select>
                <el-date-picker
                    v-else-if="item.mode === 'daterange'"
                    v-model="item.value"
                    clearable
                    class="filter-date-cell"
                    type="daterange"
                    range-separator="至"
                    value-format="yyyy-MM-dd"
                    :size="item.size || 'small'"
                    :start-placeholder="item.startPlaceholder"
                    :end-placeholder="item.endPlaceholder">
                </el-date-picker>
            </template>

            <div class="filter-button-group" v-if="filterForm">

                <el-button
                    @click="handleSearch"
                    :loading="isLoading"
                    type="danger"
                    icon="el-icon-search"
                    size="small">
                    搜索
                </el-button>

                <el-button
                    @click="handleReset"
                    icon="el-icon-refresh-right"
                    size="small">
                    重置
                </el-button>

            </div>

        </div>
        <div class="filter-extend">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilterView',
        data () {
            return {
                isLoading: false,
            }
        },
        props: {
            filterForm: { default: '' },
            isBg: { default: false }
        },
        methods: {
            handleSearch () {
                this.isLoading = true;
                this.$emit('search', () => {
                    this.isLoading = false;
                });
            },
            handleReset () {
                for (let k in this.filterForm) {
                    this.filterForm[k].value = '';
                }
                this.handleSearch();
            },
        },
    }
</script>


<style lang="scss" scoped>
    @import "~src/assets/scss/define.scss";
    .filter-view{
        @extend %df;
        border-radius: j(5);
        &.has-filter {
            @extend %boxs;
            padding: j(16) j(16) 0;
            background-color: #fff;
        }
    }
    .filter-inner{
        @extend %df1;
        @extend %df;
        @extend %aic;
        @extend %fww;
    }
    .filter-cell{
        width: j(200);
        margin-right: j(16);
        margin-bottom: j(16);
    }
    .filter-date-cell{
        margin-right: j(16);
        margin-bottom: j(16);
    }
    .filter-button-group{
        @extend %dib;
        margin-bottom: j(16);
    }
</style>
