const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test:  /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: 'assets/[hash].[ext]',
          },
        },
        {
          test:  /\.ttf$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      ],
    },
    devServer: {
      static: './src',
      port: 3000,
      compress: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: env.mode,
        template: './src/index.html',
      }),
    ],
    mode: env.mode,
    resolve: {
      extensions: ['.js', '.jsx']
    },
  };
};
