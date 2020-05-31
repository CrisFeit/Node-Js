const path = require('path');
const nodeExternals = require('webpack-node-externals')
module.exports = {
    target : 'node',
    
    mode : 'development',
    
    context: path.resolve(__dirname, 'app/server'),    
    entry : { 
          server : './server.js'
    } ,

    output: {
        path: path.resolve(__dirname, 'app/dist')
    },

    externals: [nodeExternals()],

    module : {
        rules : [
            {
                test: /\.js$/,
                exclude:/(node_modules)/,
                loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
            }
        ]
    }
}