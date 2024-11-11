const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8564,
    open: true,
  },
  module: {
    rules: [
      {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
      },
      {
	test: /\.(png|jpg|jpeg|gif)$/i,
	type: 'asset/resource',
	use: [
          {
	    loader: 'file-loader',
	    options: {
	      name: '[name].[ext]',
	      outputPath: 'images',
	    },
	  },
	  {
            loader: 'image-webpack-loader',
            options: {
	      mozjpeg: { progressive: true, quality: 65 },
	      optipng: { enabled: false },
	      pngquant: { quality: [0.65, 0.90], speed: 4 },
	      gifsicle: { interlaced: false },
	      webp: { quality: 75 }
	    },
	  },
	]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.css']
  }
};
