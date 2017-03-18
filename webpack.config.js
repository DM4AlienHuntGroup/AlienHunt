const webpack = require('webpack');
module.exports = {
	entry: [
		, "./src/app.js"
	]
	, module: {
		loaders: [
			{
				test: /\.js/
				, exclude: /node_modules/
				, loader: "babel"
			}
			, {
				test: /\.css/
				, exclude: /node_modules/
				, loader: "style!css"
			}
			, {
				test: /\.html$/
				, loader: "html"
			}
			, {
		    test: /\.(jpe?g|png|gif|svg)$/i,
		    loaders: [
		      'file?hash=sha512&digest=hex&name=[hash].[ext]',
		      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
		    ]
		  }
		]
	}
	, resolve: {
		extensions: [ "", ".js", ]
	}
	, output: {
		path: __dirname + "/"
		, filename: "bundle.js"
	}
	// , plugins: [new webpack.optimize.UglifyJsPlugin()]
	, devServer: {
		contentBase: "./"
	}
};
