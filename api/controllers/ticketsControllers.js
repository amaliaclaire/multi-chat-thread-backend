const model = require("../models/ticketsModels")
console.log('models');

getTickets = (req, res, next) => {
  model.getAllTickets(req.body)
    .then(tickets => res.status(200).send({tickets}))
    .catch(err => console.log(err))
  }

ticketComments = (req, res, next) => {
  let ticketID = req.params.ticket_id
  model.getComments(ticketID)
  .then(comments => res.status(200).send({comments}))
}



module.exports = {getTickets, ticketComments}
