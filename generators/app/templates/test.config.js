import path from 'path'

const TEST_ROOT = path.resolve(__dirname, 'test')

// 动态创建测试文件的配置项
export default {
    sourceDir: path.join(TEST_ROOT, 'cases'),
    sourcePattern: /case-(\d+)\.source\.jsx/,
    sourceTmpl: path.join(TEST_ROOT, 'cases', 'case-{}.source.jsx'),
    assertTmpl: path.join(TEST_ROOT, 'cases', 'case-{}.assert.js'),
    testTmpl: 'case-{}.test.js', // 生成临时文件的模板
    tmpDir: path.join(TEST_ROOT, 'test_out'), // 动态生成临时测试文件的目录
    samples: ['01', '02', '03'], // 使用指定的 case 作为文档中的示例代码
    sampleTag: 'doc'
}
