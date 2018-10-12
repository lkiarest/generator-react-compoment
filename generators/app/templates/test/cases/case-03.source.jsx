/**
 * 测试用例
 *
 * @title 直接指定 fetchName
 * @desc
 *   传入自定义的 fetchName 方法，
 *   返回 Promise 对象
 */

import React from 'react'
import <%= componentName %> from '../../lib/index'

// doc
export default <<%= componentName %> fetchName={function fetchName() { return Promise.resolve('qqq') }} />
