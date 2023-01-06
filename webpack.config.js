const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    devServer: {
      static: './src',
      port: 3000,
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
