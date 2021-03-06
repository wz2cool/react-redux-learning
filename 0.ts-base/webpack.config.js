const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");
const webpack = require('webpack');

var isDevelopment = process.argv.indexOf('--development') !== -1;

var plugins = [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
        template: "src/client/index.ejs",
        minify: {
            removeComments: true
        },
        inject: true
    })
];

const entryPath = path.join(__dirname, "src/client/index.tsx");
const entry = {};
const output = {
    path: __dirname + "/dist/static",
    publicPath: '',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
};


if (isDevelopment) {
    entry.app = [
        'webpack-hot-middleware/client?reload=true',
        'react-hot-loader/patch',
        entryPath
    ];

    // dev 环境 chunkhash 报错， 只能用hash
    output.filename = '[name].[hash:8].js';
    plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
    entry.app = entryPath;
    output.filename = '[name].[chunkhash:8].js';
    plugins.push(new CleanWebpackPlugin(['dist/static']));
}

module.exports = {
    entry: entry,
    output: output,
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                exclude: [/vendors/, /node_modules/],
                loader: "babel-loader!awesome-typescript-loader?configFileName=tsconfig.client.json"
            },
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                loader: "babel-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader"
            },
            {
                test: /\.css?$/,
                exclude: [/node_modules/],
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss?$/,
                exclude: [/node_modules/],
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
    },
    plugins: plugins
};