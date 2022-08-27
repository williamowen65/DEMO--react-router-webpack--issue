const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (arg) => {
    return {
        mode: "development",
        entry: path.resolve("./src/index.js"),
        output: {
            path: path.resolve(__dirname, "dist"),
            // filename: "./[name].js",
            // clean: true,
        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    include: [
                        path.resolve(
                            __dirname,
                            "src"
                        ),
                    ],
                    exclude: [
                        path.resolve(
                            __dirname,
                            "node_modules"
                        ),
                    ],
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                        },
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),
        ],
        resolve: {
            extensions: [".json", ".js", ".jsx"],
        },
        // devtool: "inline-source-map",
        devServer: {
            static: "./dist",
            hot: true,
            port: "auto",
            historyApiFallback: true,
            client: {
                progress: true,
            },
        },
    };
};
