const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssModules: true,
    basePath: '/discover-wilderness',
    assetPrefix: '/discover-wilderness'
})