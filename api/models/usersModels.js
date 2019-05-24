const knex = require("../../db/knex")
const uuid = require("uuid/v4")

getAll = (body) => {
  return knex("users")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}

findByUser = (id) => {
  console.log('id', id);
  return knex("users")
  .where({id})
  .first()
  .then(match => match)
  .catch(console.error)
}

getCommentsNested = () => {
 return knex("users")
 .then(users => {
   const promises = users.map(user => {
     return knex('comments').where({user_id: user.id})
     .then(comments => {
       console.log('comments', comment);
     })
   })
 })
}






module.exports = { getAll, findByUser, getCommentsNested }
