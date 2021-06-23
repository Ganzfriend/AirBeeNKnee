const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        use: "url-loader?limit=100000",
      },
      {
        test: /\.(eot|ttf|png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: "file-loader",
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: "html-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  externals: {
    jquery: "jQuery",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    //   "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
    // }),
  ],
};
