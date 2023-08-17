const Koa = require('koa')
const { koaBody } = require('koa-body')
const router = require('./router/index')
const app = new Koa()

app.use((ctx, next) => {
    const { request, response } = ctx
    const origin = request.header.origin
    ctx.set('Access-Control-Allow-Origin', origin)
    next()
})

app.use(router.routes())

app.use(
    koaBody({
        multipart: true
    })
)
app.listen(4000, () => {})
