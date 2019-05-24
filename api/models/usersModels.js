const knex = require("../../db/knex")
const uuid = require("uuid/v4")

getAll = (body) => {
  return knex("users")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}

findByUser = (username) => {

  return knex("users")
  .where({user_name: username })
  .first()
  .then(match => match)
  .catch(console.error)
}




module.exports = { getAll, findByUser }
