// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 10000,
                            name: 'images/[name].[hash].[ext]'
                        }
                    },
                    
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                    
                ],
            },
            {
                test: /\.css$/,
                // loader: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [{
                //         loader: 'css-loader',
                //         options: {
                //             modules: true
                //         }
                //     }]
                // }),
                use: [
                    // MiniCssExtractPlugin.loader, 'css-loader', 'style-loader'
                    MiniCssExtractPlugin.loader, 'css-loader',
                ],
            },
        ]
        
    },
    plugins: [
        // new ExtractTextPlugin('css/[name].[hash].css')
        new MiniCssExtractPlugin()
    ]
}