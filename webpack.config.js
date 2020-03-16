const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const BundleAnalyserPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

const BUILD_DIR = path.join(__dirname, "./build");
const APP_DIR = path.join(__dirname, "./src");

module.exports = (env) => {
    console.log("WEBPACK ENV: ", env);

    // env variables
    const isProduction = env === 'production';
    const isDev = env === 'development';

    //// PLUGINS ////

    // clean 'build' folder everytime before a new build
    const cleanPlugin = new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!build/*', '!static-files*'],
        root: __dirname,
        verbose: true,
        dry: false
    });

    // analyze the bundle
    const analyzePlugin = new BundleAnalyserPlugin({
        analyzerMode: 'static'
    });

    // create the bootstrap/virtual HTML from the given template
    // and add scripts dynamically to it
    const HTMLPlugin = new HtmlWebpackPlugin({
        template: 'template.html',
        chunksSortMode: 'none'
    });

    const uglifyPlugin = new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
            ecma: 8,
            mangle: false,
            keep_classnames: true,
            keep_fnames: true
        }
    })

    // Building webpack config
    const config = {};
    config.entry = ['babel-polyfill', './src/index.js']; 

    config.output = {
        path: BUILD_DIR,
        filename: 'bundle.js'
    };

    config.optimization = {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial'
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        },
        minimizer: [uglifyPlugin]
    };

    config.plugins = [cleanPlugin, HTMLPlugin];

    config.module = {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|ico|ttf|woff|woff2|eot)$/i,
                loader: 'file-loader',
                include: APP_DIR,
                exclude: /node_modules/
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                include: APP_DIR
            }, {
                test: /\.(jsx|js)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: APP_DIR
            }
        ]
    };

    config.resolve = {
        extensions: ['.js', '.jsx']
    };

    if (isProduction) {
        config.output = {
            path: BUILD_DIR,
            publicPath: BUILD_DIR + '/',
            chunkFilename: '[name].[chunkhash].bundle.js',
            filename: '[name].[chunkhash].bundle.js'
        };
        config.mode = 'production';
        config.devtool = 'source-map';
    }

    if (isDev) {
        config.output = {
            path: BUILD_DIR,
            chunkFilename: '[name].bundle.js',
            filename: '[name].bundle.js',
        };
        config.mode = 'development';
        config.devtool = 'inline-source-map';
        config.devServer = {
            historyApiFallback: true
        }
    }

    return config;
};