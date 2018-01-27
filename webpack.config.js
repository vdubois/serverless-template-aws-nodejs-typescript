const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
    externals: [
        'aws-sdk',
        {
            './cptable': 'var cptable'
        }
    ],
    entry: slsw.lib.entries,
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx'
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    target: 'node',
    module: {
        rules: [{
            exclude: [
                "**/*.spec.ts"
            ],
            test: /\.ts(x?)$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.webpack.json'
                }
            }]
        }]
    }
};
