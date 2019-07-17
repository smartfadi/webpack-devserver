const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports={
    entry: './src/index.js',
    // devtools: 'inline-source-map',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        disableHostCheck: true
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
}