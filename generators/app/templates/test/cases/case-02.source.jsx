/**
 * 测试用例
 *
 * @title 使用 Adapter 辅助类
 * @desc
 *   这是一个基本用法的示例，
 *   使用 Adapter 辅助函数简化请求
 */

import React from 'react'
import <%= componentName %> from '../../lib/index'

// doc
import { withAdapter, ProviderTypes } from '@qintx/react-component-tool'

const Mock<%= componentName %> = withAdapter({
    type: ProviderTypes.Mock,
    option: {
        fetch: {
            username: 'qqq'
        }
    }
})(<%= componentName %>, {
    fetchName() {
        return this.fetch().then(res => res.username)
    }
})

export default <Mock<%= componentName %> />
