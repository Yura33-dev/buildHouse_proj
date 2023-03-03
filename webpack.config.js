const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const globule = require("globule");


const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

const pugPath = globule.find(['src/pug/pages/index/index.pug'],
                             ['src/pug/pages/services/services.pug']);

module.exports = {
  mode,
  target,
  devtool,  

  entry: {
    index: './src/pug/pages/index/index.js',
    services: './src/pug/pages/services/services.js'
    
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? 'assets/js/[name].js' : 'assets/js/[name].[contenthash].js',
    clean: true,
    assetModuleFilename: pathData => {
      const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
      return devMode ? `${filepath}/[name][ext]` : `${filepath}/[name].[hash][ext]`;
    },
    publicPath: './'
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/pug/pages/index.pug',
    //   filename: 'index.html'
    // }),
    ...pugPath.map(pathOne => {
      return new HtmlWebpackPlugin({
        template: pathOne,
        filename: `${pathOne.split(/\/|.pug/).splice(-2, 1)}.html`,
        chunks: [`${pathOne.split(/\/|.pug/).splice(-2, 1)}`]
      });
    }),

    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, './', 'question.php'), to: path.resolve(__dirname, 'dist') }
    //   ],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/i,
        loader: "pug-loader",
        exclude: /(node_modules | bower_components)/,
      },
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      // },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader', 
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              }
            }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.(woff2? || ttf || eot)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
        type: "asset/resource",
      },
    ],
  },
};