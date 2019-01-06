const HtmlWebPackPugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    js: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.tpl.html$/,
        use: 'es6-string-html-template'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 3,
                    //minimize: true,
                    sourceMap: true
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    autoprefixer: {
                        browser: ['last 2 versions']
                    },
                    sourceMap: true,
                    plugins: () => [autoprefixer]
                }
            },
            {
                loader: 'resolve-url-loader'
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=assets/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        use: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(['dist/**/*.*']),
    new HtmlWebPackPugin({
      template: './src/template.html',
      filename: './index.html',
      hash: true,
      chunks: ['js'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeEmptyAttributes: true,
        removeComments: true
      }
    })
  ]
}
