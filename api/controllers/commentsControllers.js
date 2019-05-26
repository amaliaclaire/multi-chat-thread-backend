const model = require("../models/commentsModels")

getComments = (req, res, next) => {
  model.getAllComments(req.body)
    .then(comments => res.status(200).send({comments}))
    .catch(err => console.log(err))
  }



  usersTicketComments = (req, res, next) => {
    model.userTicketsComments(req.params.user)
    .then(comments => res.json({comments}))
    .catch(console.log(err))
  }

  create = (req, res, next) => {

    model.create(req.body)
    .then(comment => res.status(200).send({comment}))
  }






module.exports = {getComments, usersTicketComments, create}
