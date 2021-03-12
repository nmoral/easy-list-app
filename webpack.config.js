const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
    const env = dotenv.config().parsed;
    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        entry: './src/index.tsx',
        output: {
            publicPath: '/',
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, './build'),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.css/,
                    use: ['' + 'style-loader', 'css-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                }
            ],
        },
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
            extensions: ['.ts', '.tsx', '.js']
        },
        plugins: [
            new webpack.DefinePlugin(envKeys),
            new MiniCssExtractPlugin({filename: '[name].[hash].css'}),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new CopyPlugin([{from: './src/assets/images', to: 'images'}]),
        ],
        devServer: {
            contentBase: path.resolve(__dirname, 'build'),
            port: 80,
            inline: true,
            hot: true,
            historyApiFallback: true,
            disableHostCheck: true,
            host: '0.0.0.0',
        }
    }
};
