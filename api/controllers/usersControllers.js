const model = require("../models/usersModels")


getUsers = (req, res, next) => {
  model.getAll(req.body)
  .then(users => res.status(200).send({users}))
  .catch(err => console.log(err))
}

getUser = (req, res, next) => {
  const name = req.params.user_name
  model.findByUser(name)
  .then(user => res.status(200).send(user))
  .catch(console.error())

}



module.exports = { getUsers, getUser }
