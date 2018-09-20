import path from 'path'
import packageConf from './package.json'

const TARGET_DIR = path.resolve(__dirname, 'lib')
const SRC = path.resolve(__dirname, 'src')
const LIB = process.env.npm_package_config_lib
const BRIEF_NAME = packageConf.name.includes('/') ? packageConf.name.split('/')[1] : packageConf.name

export default {
    name: packageConf.name,
    briefName: BRIEF_NAME,
    version: packageConf.version,
    src: SRC,
    entry: path.resolve(SRC, 'index.jsx'),
    targetEntry: path.join(TARGET_DIR, 'index.js'),
    targetStyle: path.join(TARGET_DIR, 'index.default.css'),
    themeEntry: path.resolve(SRC, 'styles', 'index.less'),
    themes: ['default', 'green'],
    moduleNameRule: `${LIB}_${BRIEF_NAME.toLowerCase()}_[local]` // postcss-module classname generate rule
}
