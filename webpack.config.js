const path = require("path")
const HtmlWebpackPligin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
      },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        port: 8000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            },
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: ['file-loader', 'webp-loader']
              }
        ]
    },
    plugins: [new HtmlWebpackPligin({
        template: "./public/index.html",
        filename: "index.html"
    })]
}