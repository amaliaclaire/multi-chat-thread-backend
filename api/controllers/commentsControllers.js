const model = require("../models/commentsModels")

getComments = (req, res, next) => {
  model.getAllComments(req.body)
    .then(comments => res.status(200).send({comments}))
    .catch(err => console.log(err))
  }




module.exports = {getComments}
