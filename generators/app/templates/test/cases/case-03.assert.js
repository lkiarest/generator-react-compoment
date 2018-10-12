/**
 * assertions
 */
export default (assert, element) => new Promise(resolve => setTimeout(() => {
    assert.equal(element.text(), 'Hello, qqq')
    resolve()
}, 0))
