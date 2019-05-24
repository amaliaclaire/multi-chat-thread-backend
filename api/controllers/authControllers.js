const model = require("../models/authModels")


getUsers = (req, res, next) => {
  model.getAll(req.body)
  .then(users => res.status(200).send({users}))
  .catch(err => console.log(err))
}

getUser = (req, res) => {
  let userId;
  const id = req.params.id
  model.getOne(id)
  .then(result => {
    console.log('result:', result);
  })
}


module.exports = { getUsers }
