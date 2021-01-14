/* eslint-disable no-undef */
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, args) => {
  const devMode = args.mode !== "production";
  const config = {
    mode: args.mode || "development",
    entry: ["@babel/polyfill", "./src/index.js"],
    resolve: {
      modules: ["node_modules", "src"],
      extensions: [ ".js" ],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.[hash].js",
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              try {

                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);

                return `vendor.${packageName[1].replace("@", "")}`;
              } catch (e) {
                return "vendor";
              }
            },
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
              ],
              plugins: [
                [
                  "module-resolver",
                  {
                    root: [
                      "./src",
                    ],
                  },
                ],
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-export-namespace-from",
                ["@babel/plugin-transform-async-to-generator", { module: "bluebird" }],
              ],
            },
          },
        },
        { test: /\.(ttf|eot|woff2?)(\?v=[a-z0-9=\.]+)?$/i, loader: "file-loader?name=fonts/[name].[ext]" },
        { test: /\.(jpe?g|png|gif|ico)$/i, loader: "file-loader?name=img/[name].[ext]" },
        { test: /\.svg$/, use: ["@svgr/webpack"],
        },
      ],
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "EVE Echoes Fitting Tool",
        template: "src/index.html",
        // favicon: "",
      }),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     { from: 'src/assets', to: 'assets/' },
      //   ]
      // }),
    ],  
  };

  if (devMode) {
    config.devtool = "inline-source-map";
    config.devServer = {
      historyApiFallback: {
        disableDotRule: true,
      },
      port: 3008,
      hot: true,
      clientLogLevel: "info",
      // Host for testing in VM
      // allowedHosts: ['10.0.2.2'],
      // outputPath: path.join(__dirname, 'distribution'),
      // proxy: {
      //   "/api": {
      //     target: "http://localhost:3008",
      //   },
      // },
    };
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
    );
  }

  return config;
};
