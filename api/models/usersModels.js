const knex = require("../../db/knex")
const uuid = require("uuid/v4")

getAll = (body) => {
  return knex("users")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}

getOne = (id) => {
  return knex("users")
  .select("*")
  .where({id})
  .first()
  .then(result =>
    result)
  .catch(err => console.log(err))
}




module.exports = { getAll, getOne }
