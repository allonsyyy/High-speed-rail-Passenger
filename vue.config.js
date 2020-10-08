const path = require('path'); // 引入path模块
function resolve(dir) {
    return path.join(__dirname, dir); //path.join(_dirname)设置绝对路径
}

module.exports = {
    css: {
        loaderOptions: {
            less: {
                // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
                // lessOptions: {
                modifyVars: {
                    // 直接覆盖变量
                    // 'gray-8': '#111',
                    // 'text-color': '#111',
                    // 'border-color': '#eee'
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    hack: `true; @import "D:/sckj/crew-master/src/assets/styles/custom.less";`,
                }
            }
            // },
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            //第一个参数：别名 第二个参数：路径
            .set('@components', resolve('src/components'))
            .set('@assets', resolve('src/assets'))
            .set('@common', resolve('src/common'))
            .set('@views', resolve('src/views'));
    }
};