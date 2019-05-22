const knex = require("../../db/knex")
const uuid = require("uuid/v4")
console.log('models were hit');


getAllComments = (body) => {
  return knex("comments")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}

userTicketsComments = (username) => {
  return knex("users")
  .where({user: user})
  .first()
  .then(userInfo => {
    return knex('comments')
    .where({user_id: userInfo.id})
  })
}




module.exports = { getAllComments, userTicketsComments }
