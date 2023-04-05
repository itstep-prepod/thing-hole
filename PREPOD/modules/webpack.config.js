const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'build'),
        open: true
    },
    plugins: [
       new HtmlPlugin({
        template: 'public/index.html',
        inject: 'body'
       })
    ]
};

