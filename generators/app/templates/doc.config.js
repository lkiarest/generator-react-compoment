import path from 'path'
import buildConf from './build.config'

export default {
    distDir: path.resolve(__dirname, 'site'),
    devServer: {
        port: 3000,
        host: 'localhost'
    },
    webpack: {
        resolve: {
            alias: {
                '@styleEntry': buildConf.targetStyle
            }
        }
    }
}
