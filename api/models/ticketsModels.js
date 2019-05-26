const knex = require("../../db/knex")
const uuid = require("uuid/v4")
console.log('models have been hit');


getAllTickets = (body) => {
  return knex("tickets")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}

getComments = (ticketID) => {
  console.log('ticket model', ticketID);
  return knex("comments")
  .where({ticket_id: ticketID})
  .select("*")
  .then(result =>  {
    console.log('result', result);
      return result
    })
  .catch(err => console.log(err))
}


module.exports = { getAllTickets, getComments }
