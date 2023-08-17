const Router = require('koa-router')
const router = new Router()

const Mock = require('mockjs')

function generatorList(num) {
    return Mock.mock({
        [`list|${num}`]: [
            {
                'id|+1': 1,
                title: '@ctitle(15,20)',
                image: '@natural(0,15)',
                reads: '@natural(0,9999)',
                from: '@ctitle(3,7)',
                date: "@date('yyyy-MM-dd')"
            }
        ]
    })
}

router.get('/api/data', (ctx) => {
    const { num } = ctx.request.query

    ctx.body = generatorList(num)
})

module.exports = router
