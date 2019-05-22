const model = require("../models/ticketsModels")

getTickets = (req, res, next) => {
  model.getAllTickets(req.body)
    .then(tickets => res.status(200).send({tickets}))
    .catch(err => console.log(err))
  }

  


module.exports = {getTickets}
