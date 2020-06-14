const path = require('path')

module.exports = {
    mode : 'development',
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public'),
        publicPath: 'public'
    },
    resolve : {
        extensions : ['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /\.ts|js$/,
                use: 'ts-loader',
                include: [ path.resolve(__dirname,'src') ],

            }
        ]
    }
}