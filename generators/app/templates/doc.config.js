const path = require('path')

export default {
    distDir: path.resolve(__dirname, 'site'),
    devServer: {
        port: 3000,
        host: 'localhost'
    },
    webpack: {
        resolve: {
            alias: {
                '@lib': path.resolve(__dirname, 'lib')
            }
        }
    }
}
