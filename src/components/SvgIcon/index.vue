<template>
    <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
    <i v-else-if="isElement" :class="[iconClass, 'svg-icon', 'el-svg-icon']"></i>
    <svg v-else :class="svgClass" :style="{ width: size, height: size }" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
    // doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
    import { isExternal } from 'src/utils/validate'

    export default {
        name: 'SvgIcon',
        props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String,
                default: ''
            },
            size: {
                default: 20,
            },
        },
        computed: {
            isElement () {
                return this.iconClass.indexOf('el-') > -1;
            },
            isExternal() {
                return isExternal(this.iconClass)
            },
            iconName() {
                return `#icon-${this.iconClass}`
            },
            svgClass() {
                if (this.className) {
                    return 'svg-icon ' + this.className
                } else {
                    return 'svg-icon'
                }
            },
            styleExternalIcon() {
                return {
                    mask: `url(${this.iconClass}) no-repeat 50% 50%`,
                    '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
                }
            }
        }
    }
</script>

<style scoped>
    .svg-icon {
        width: 20px;
        height: 20px;
        /*vertical-align: -0.15em;*/
        fill: currentColor;
        overflow: hidden;
    }
    .el-svg-icon{
        margin-right: 5px !important;
    }
    .svg-external-icon {
        background-color: currentColor;
        mask-size: cover!important;
        display: inline-block;
    }
</style>
