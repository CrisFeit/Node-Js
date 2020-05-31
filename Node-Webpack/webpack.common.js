const path = require('path');

module.exports = {
    target: 'web',
    context: path.resolve(__dirname, 'app/client'),
    entry: [
        './js/index.js',
        './css/style.css',
    ],

    output: {
        path: path.resolve(__dirname, 'app/dist/assets')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}