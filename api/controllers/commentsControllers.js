const model = require("../models/commentsModels")

getComments = (req, res, next) => {
  model.getAllComments(req.body)
    .then(comments => res.status(200).send({comments}))
    .catch(err => console.log(err))
  }

  console.log('controllers were hit');


  usersTicketComments = (req, res, next) => {
    model.userTicketsComments(req.params.user)
    .then(comments => res.json({comments}))
    .catch(console.log(err))
  }




module.exports = {getComments, usersTicketComments}
