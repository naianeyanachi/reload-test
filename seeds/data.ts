const data_all = require('./../data/data.ts')

const seed = async (knex) => {
  await knex("business").del()
  await knex("contributors").del()
  await knex("desktops").del()
  console.log(data_all)
  await knex("business").insert(data_all.businesses)
  await knex("desktops").insert(data_all.desktops)
  await knex("contributors").insert(data_all.contributors)
}

module.exports = {
  seed
}
