const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
	test: /\.css/,
	use: ['style-loader', 'css-loader']
      },
      {
	test: /\.(png|jpg|jpeg|gif)$/i,
	type: 'asset/resource',
	use: [
	  {
	    loader: 'file-loader',
	    options: {
	      name: '[path][name].[ext]',
	    },
	  },
	  {
	    loader: 'image-webpack-loader',
	    options: {
	      mozjpeg: {
		progressive: true,
		quality: 65,
	      },
	      optipng: {
		enabled: false,
	      },
	      pngquant: {
		quality: [0.65, 0.90],
		speed: 4,
	      },
	      gitsicle: {
		 interlaced: false,
	      },
	      webp: {
		quality: 75,
	      },
	    },
	  },
	],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css']
  }
};
