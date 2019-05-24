const model = require("../models/authModels")


getUsers = (req, res, next) => {
  model.getAll(req.body)
  .then(users => res.status(200).send({users}))
  .catch(err => console.log(err))
}

getUser = (req, res) => {
  const id = req.params.id
  model.populate(id).then()
  .then(user => res.status(200).send(user))
  .catch(console.log(err))
}



module.exports = { getUsers, getUser }
