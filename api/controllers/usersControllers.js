const model = require("../models/usersModels")


getUsers = (req, res, next) => {
  model.getOne(req.body)
  .then(users => res.status(200). send({users}))
  .catch(err => console.log(err))
}

module.exports = { getUsers }
