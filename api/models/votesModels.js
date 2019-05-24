const knex = require("../../db/knex")
const uuid = require("uuid/v4")

getAll = (body) => {
  return knex("votes")
  .select("*")
  .where(body)
  .then(result => result)
  .catch(err => console.log(err))
}

console.log('hitsModels');

addOrRemoveVote = (body) => {
  return knex('votes')
  .where(newVote)
  .first()
  .then(result => {
    if (!result) {
      return knex('votes')
      .insert(newVote)
    } else {
      return knex('votes')
      .where(newVote)
      .del()
    }
  })
  .then(() => {
    return knex('votes')
    .where({})
  })
}

module.exports = { getAll, addOrRemoveVote }
