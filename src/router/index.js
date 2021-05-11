import Router from 'koa-router'
import controll from '../controll'

const router = new Router()

router.get('/', controll.getUser)
router.post('/', controll.addUser)
router.put('/', controll.editUser)
router.delete('/:idx', controll.removeUser)

export default router
