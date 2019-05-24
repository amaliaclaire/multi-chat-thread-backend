const model = require("../models/votesModels")


getVotes = (req, res, next) => {
  model.getAll(req.body)
  .then(votes => res.status(200).send({votes}))
  .catch(err => console.log(err))
}

console.log('hits controllers votes');
addOrRemoveVote = (req, res, next) => {
  model.addOrRemoveVote(req.body)
  .then(vote => res.status(200).send(vote))
  .catch(console.log(err))
}



module.exports = { getVotes, addOrRemoveVote }
