module.exports = { // 模块导出
  devServer: { // 开发服务器
    proxy: {   // 代理
      '/api': {
        target: 'http://uat.kpbyd.com/',  // 代理路径
        changeOrigin: true, // 是否跨域
        ws: true, // 代理webSocket，WebSocket是一种在单个TCP连接上进行全双工通信的协议。
                 // 全双工的系统可以用一般的双向车道形容。两个方向的车辆因使用不同的车道，因此不会互相影响。
        pathRewrite: {
          '^/api': '/',//重写,
        }
      }
    }
  }
}
