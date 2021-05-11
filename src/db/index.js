import Mysql from './helper'

const mysql = new Mysql()

const db = {
  addUser: async (name, age) => {
    const qry = `insert into user_info(user_name, age, regdate) values('${name}', '${age}', NOW())`
    const result = await mysql.query(qry)
    return result
  },
  removeUser: async (idx) => {
    const qry = `delete from user_info where idx = ${idx}`
    const result = await mysql.query(qry)
    return result
  },
  setUser: async (idx, name, age) => {
    const qry = `update user_info set user_name = '${name}', age = '${age}' where idx = ${idx}`
    const result = await mysql.query(qry)
    return result
  },
  getUser: async (start, rows) => {
    const qry = `select * from user_info order by regdate desc limit ${start}, ${rows}`
    const result = await mysql.query(qry)
    return result
  },
  getUserCount: async () => {
    const qry = 'select count(1) as total from user_info'
    const result = await mysql.query(qry)
    return result
  },
}

export default db
