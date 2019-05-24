const model = require("../models/usersModels")


getUsers = (req, res, next) => {
  model.getAll(req.body)
  .then(users => res.status(200).send({users}))
  .catch(err => console.log(err))
}

getUser = (req, res, next) => {
  const id = req.params.id
  model.getOne(id)
  .then(user => res.status(200)).json(user)
  .catch(err => next(err))
}



module.exports = { getUsers, getUser }
