const model = require("../models/votesModels")


getVotes = (req, res, next) => {
  model.getAll(req.body)
  .then(votes => res.status(200).send({votes}))
  .catch(err => console.log(err))
}




module.exports = { getVotes }
