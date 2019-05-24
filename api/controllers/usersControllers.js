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

getComments = (req, res, next) => {
  const usersAndComments = model.getCommentsNested()
  .then(usersAndComments => {
    res.json(usersAndComments)
  })
  .catch(err => {
    next(err)
  })
}
console.log('hi');



module.exports = { getUsers, getUser, getComments }
