const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'src/template.html',
            filename: 'index.html'
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
          },
          {
            test: /\.xml$/i,
            use: ['xml-loader'],
          },
          {
            test: /\.svg$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]', // Keep the original name with a hash
                outputPath: 'images/', // Ensure it's in the 'images/' folder in 'dist'
                publicPath: '/images/', // Set the public path for Webpack Dev Server
              },
            },
          },
        ],
    },

    optimization: {
        runtimeChunk: 'single',
    },


}