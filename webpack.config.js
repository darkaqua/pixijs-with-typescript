
const path = require('path');

/* Configure BrowserSync */
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const BrowserSyncPluginConfig = new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    proxy: 'http://localhost:8080/'
}, config = {
    reload: false
});

/* Configure ProgressBar */
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ProgressBarPluginConfig = new ProgressBarPlugin();

/* Configure UgilfyJS */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const UglifyJsPluginConfig = new UglifyJSPlugin({
    sourceMap: true
});

/* Configure OptimizeCssAssets */
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const OptimizeCssAssetsPluginConfig = new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: {removeAll: true } },
    canPrint: true
});

/* Export configuration */
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devtool: 'source-map',
    resolve: { extensions: [".web.ts", ".web.js", ".ts", ".js"] },
    plugins: [
        BrowserSyncPluginConfig,
        ProgressBarPluginConfig,
        UglifyJsPluginConfig,
        OptimizeCssAssetsPluginConfig
    ]
};
