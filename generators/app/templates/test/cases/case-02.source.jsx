/**
 * 测试用例
 *
 * @title 使用 Adapter 辅助类
 * @desc
 *   这是一个基本用法的示例，
 *   使用 Adapter 辅助函数简化请求
 */

import React from 'react'
import <%= componentName %> from '../../src/index'

// doc
import { withAdapter, ProviderTypes } from '@qintx/shein-biz-adapter'

const Mock<%= componentName %> = withAdapter(ProviderTypes.Mock, {
    provider: {
        '/user': {
            username: 'qqq'
        }
    }
})(<%= componentName %>, {
    fetchName() {
        return this.request('/user').then(res => res.username)
    }
})

export default <Mock<%= componentName %> />
