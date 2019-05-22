const knex = require("../../db/knex")
const uuid = require("uuid/v4")


getAllComments = (body) => {
  return knex("comments")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}


module.exports = { getAllComments }
