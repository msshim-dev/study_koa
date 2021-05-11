import db from '../db'

const controll = {
  getUser: async (ctx) => {
    const { page } = ctx.query
    const start = (page - 1) * 10
    const list = await db.getUser(start, 10)
    const count = await db.getUserCount()
    ctx.body = {
      list,
      total: count[0].total,
    }
  },
  addUser: async (ctx) => {
    const { name, age } = ctx.request.body
    const result = await db.addUser(name, age)
    ctx.body = result
  },
  editUser: async (ctx) => {
    const { idx, name, age } = ctx.request.body
    const result = await db.setUser(idx, name, age)
    ctx.body = result
  },
  removeUser: async (ctx) => {
    const { idx } = ctx.params
    const result = await db.removeUser(idx)
    ctx.body = result
  },
}

export default controll
