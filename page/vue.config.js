const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
        return {
            plugins: [
                new TerserPlugin({
                    extractComments: true,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                            drop_debugger: true,
                            pure_funcs: ['console.log', 'console.warn', 'console.error']
                        }
                    }
                })
            ]
        }
    }
}
}