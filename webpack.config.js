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
                             ['src/pug/pages/services/services.pug'],
                             ['src/pug/pages/about/about.pug'],
                             ['src/pug/pages/services/wooden/wooden.pug'],
                             ['src/pug/pages/gallery/gallery.pug']);

module.exports = {
  mode,
  target,
  devtool,  

  entry: {
    index: './src/pug/pages/index/index.js',
    services: './src/pug/pages/services/services.js',
    about: './src/pug/pages/about/about.js',
    wooden: './src/pug/pages/services/wooden/wooden.js',
    gallery: './src/pug/pages/gallery/gallery.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? 'assets/js/[name].js' : 'assets/js/[name].[contenthash].js',
    clean: true,
    assetModuleFilename: pathData => {
      const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
      return devMode ? `${filepath}/[name][ext]` : `${filepath}/[name].[hash][ext]`;
    },
    //publicPath: './'
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
      filename: '[name].styles.[contenthash].css',
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
      //   test: /\.pug$/,
      //   loader: '@webdiscus/pug-loader'
      // },
      {
        test: /\.html$/i,
        loader: "html-loader",
        exclude: /(node_modules | bower_components)/,
      },
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
                quality: [0.7, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 70
              }
            }
          }
        ],
        type: "asset/resource",
        // generator: {
        //   filename: './assets/pictures/[name][hash][ext][query]'
        // }
      },
    ],
  },
};