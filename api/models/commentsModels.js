const knex = require("../../db/knex")
const uuid = require("uuid/v4")


getAllComments = (body) => {
  return knex("comments")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}

userTicketsComments = (username) => {
  return knex("users")
  .where({user_name: username})
  .first()
  .then(userInfo => {
    return knex('comments')
    .where({user_id: userInfo.id})
  })
}


create = ({comment, user_id, ticket_id}) => {
  const newComment = {
    id: uuid(),
    user_id: user_id,
    ticket_id: ticket_id,
    comment: comment
  }
  return knex('comments').insert(newComment).returning('*')
}






module.exports = { getAllComments, userTicketsComments, create }
