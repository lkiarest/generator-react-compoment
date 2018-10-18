import path from 'path'

export default {
    distDir: path.resolve(__dirname, 'site'),
    devServer: {
        port: 3000,
        host: 'localhost'
    },
    webpack: {
        resolve: {
            alias: {
                '@styleEntry': path.resolve(__dirname, 'lib/index.default.css')
            }
        }
    }
}
