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


create = (body) => {
  const errors = []
  const comment = body.comment
  let response

  if (!comment) {
    errors.push('comment is required to proceed')
    response = {error}
  } else {
    const newComment = {id: uuid(), comment}
    comment.push(newComment)
    response = newComment
  }
  return response 
}




module.exports = { getAllComments, userTicketsComments, create }
