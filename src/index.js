import Koa from 'koa'
import cors from '@koa/cors'
import logger from 'koa-logger'
import koaBody from 'koa-body'
import router from './router'

const app = new Koa()
app.use(cors())
app.use(koaBody({ multipart: true }))
app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(9000, () => console.log('##server started http://localhost:9000'))
