var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge.multiple(commonConfig, {
    a:
    {

        devtool: 'inline-source-map',
        //devtool: 'cheap-module-eval-source-map',
        //devtool: 'source-map',

        output: {
            path: helpers.root('dist'),
            publicPath: '/client/dist',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js',
            sourceMapFilename: '[file].map',
        },

        plugins: [
            new ExtractTextPlugin('[name].css'),
            //new webpack.SourceMapDevToolPlugin({
            //    filename: '[name].js.map',
            //    exclude: ['vendor.js']
            //})
        ],

        devServer: {
            historyApiFallback: true,
            stats: 'minimal'
        }

    }
}
);