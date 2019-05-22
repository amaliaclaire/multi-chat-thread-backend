const knex = require("../../db/knex")
const uuid = require("uuid/v4")


getAllTickets = (body) => {
  return knex("tickets")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))

}

module.exports = { getAllTickets }
