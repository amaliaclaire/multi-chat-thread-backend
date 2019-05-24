const knex = require("../../db/knex")
const uuid = require("uuid/v4")

getAll = (body) => {
  return knex("votes")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}



module.exports = { getAll }
