import React from 'react'
// import ReactDom from 'react-dom'
import propTypes from 'prop-types'
import styles from './styles/index.less'

/**
 * @cn 哈喽
 * @desc 打个招呼
 * @author qin tianxiang
 * @date 2018-09-03
 */
class <%= componentName %> extends React.Component {
    componentWillUnmount() {
        console.log('hello unmount')
    }

    /**
     * 此方法仅作为测试文档工具用
     * @param {String} user 用户姓名
     * @param {Boolean} bValid 是否有效，默认为 false
     * @return {Number} 返回值
     */
    testMethod(user, bValid) {
        console.log('just for doc-gen test ', user, bValid, this)
        return 0
    }

    /**
     * render method
     * @return {jsx} rendered nodes
     */
    render() {
        const { name } = this.props

        return (
            <div>
                <span>Hello, </span>
                <span className={styles.name}>
                    {name}
                </span>
            </div>
        )
    }
}

<%= componentName %>.propTypes = {
    /**
     * 用户姓名
     */
    name: propTypes.string
}

<%= componentName %>.defaultProps = {
    name: 'txqin'
}

export default <%= componentName %>
