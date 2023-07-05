const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './assets/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into separate files
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                include: path.resolve(__dirname, 'assets/sass'),
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ // Plugin configuration
            filename: '../css/app.css', // Output path for the extracted CSS file
        }),
    ],
};