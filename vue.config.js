module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://lieqiadmins.eastday.com', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}