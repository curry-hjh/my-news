// vue的整体项目的配置文件
// 优先级比webpack的配置还高，我们可以把webpack的配置写在vue.config.js中，会覆盖webpack默认的配置
module.exports = {
  devServer: {
    port: 8888,
    open: true
  }
}
