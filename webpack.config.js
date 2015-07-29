var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'client'), loaders: ['react-hot', 'babel']},
        ],
    },
    entry: [
        'webpack-dev-server/client?http://localhost:4000',
        'webpack/hot/only-dev-server',
        './client/index.js',
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/auth-demo/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Redux Auth Demo',
            template: './client/index.template.ejs',
            inject: 'body',
        }),
    ],
    resolve: {
        extensions: ['', '.js',],
    },
};
