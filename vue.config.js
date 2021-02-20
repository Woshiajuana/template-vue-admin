'use strict';

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

// 具体配置参数 https://cli.vuejs.org/config/
module.exports = {
    devServer: {
        port: 9527,
    },
    publicPath: './',
    // outputDir: 'dist',
    // assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        name: '罗氏',
        resolve: {
            alias: {
                '@': resolve('src'),
                'src': resolve('src'),
            }
        }
    },
    chainWebpack (config) {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();
    },
};
