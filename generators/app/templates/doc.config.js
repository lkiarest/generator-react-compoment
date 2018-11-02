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
                // '@xxx': path.resolve(__dirname, 'xxx')
            }
        }
    }
}
