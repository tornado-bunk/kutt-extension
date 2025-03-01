const path = require('path');
const webpack = require('webpack');
const FilemanagerPlugin = require('filemanager-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtensionReloader = require('webpack-ext-reloader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WextManifestWebpackPlugin = require('wext-manifest-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const viewsPath = path.join(__dirname, 'views');
const sourcePath = path.join(__dirname, 'source');
const destPath = path.join(__dirname, 'extension');
const nodeEnv = process.env.NODE_ENV || 'development';
const targetBrowser = process.env.TARGET_BROWSER;

const extensionReloaderPlugin =
  nodeEnv === 'development'
    ? new ExtensionReloader({
        port: 9128,
        reloadPage: true,
        entries: {
          // TODO: reload manifest on update
          background: 'background',
          extensionPage: ['popup', 'options', 'history'],
        },
      })
    : () => {
        this.apply = () => {};
      };

const getExtensionFileType = (browser) => {
  if (browser === 'opera') {
    return 'crx';
  }

  if (browser === 'firefox') {
    return 'xpi';
  }

  return 'zip';
};

module.exports = {
  devtool: false, // https://github.com/webpack/webpack/issues/1194#issuecomment-560382342

  stats: {
    all: false,
    builtAt: true,
    errors: true,
    hash: true,
  },

  mode: 'development',

  entry: {
    manifest: path.join(sourcePath, 'manifest.json'),
    background: path.join(sourcePath, 'Background', 'index.ts'),
    popup: path.join(sourcePath, 'Popup', 'index.tsx'),
    options: path.join(sourcePath, 'Options', 'index.tsx'),
    history: path.join(sourcePath, 'History', 'index.tsx'),
  },

  output: {
    path: path.join(destPath, targetBrowser),
    filename: 'js/[name].bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'webextension-polyfill-ts': path.resolve(
        path.join(__dirname, 'node_modules', 'webextension-polyfill-ts')
      ),
    },
  },

  module: {
    rules: [
      {
        type: 'javascript/auto', // prevent webpack handling json with its own loaders,
        test: /manifest\.json$/,
        use: {
          loader: 'wext-manifest-loader',
          options: {
            usePackageJSONVersion: true, // set to false to not use package.json version for manifest
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCaseOnly'
              }
            }
          },
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader'
        ],
      },
    ],
  },

  plugins: [
    // Plugin to not generate js bundle for manifest entry
    new WextManifestWebpackPlugin(),
    // Generate sourcemaps
    new webpack.SourceMapDevToolPlugin({filename: false}),
    new ForkTsCheckerWebpackPlugin(),
    // environmental variables
    new webpack.EnvironmentPlugin(['NODE_ENV', 'TARGET_BROWSER']),
    // delete previous build files
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(process.cwd(), `extension/${targetBrowser}`),
        path.join(
          process.cwd(),
          `extension/${targetBrowser}.${getExtensionFileType(targetBrowser)}`
        ),
      ],
      cleanStaleWebpackAssets: false,
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(viewsPath, 'popup.html'),
      inject: 'body',
      chunks: ['popup'],
      hash: true,
      filename: 'popup.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(viewsPath, 'options.html'),
      inject: 'body',
      chunks: ['options'],
      hash: true,
      filename: 'options.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(viewsPath, 'history.html'),
      inject: 'body',
      chunks: ['history'],
      hash: true,
      filename: 'history.html',
    }),
    // write css file(s) to build folder
    new MiniCssExtractPlugin({filename: 'css/[name].css'}),
    // copy static assets
    new CopyWebpackPlugin({
      patterns: [{from: 'source/assets', to: 'assets'}],
    }),
    // plugin to enable browser reloading in development mode
    extensionReloaderPlugin,
  ],

  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
