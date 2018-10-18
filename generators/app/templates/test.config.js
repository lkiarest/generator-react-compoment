import path from 'path'

// 动态创建测试文件的配置项
export default {
    rootDir: path.resolve(__dirname, 'test'),
    samples: ['01', '02', '03'] // 使用指定的 case 作为文档中的示例代码
}
