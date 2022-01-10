const up = (knex) => {
  return knex.schema
    .createTable('business', table => {
      table.uuid('id').notNullable().primary()
      table.string('business_name')
      table.string('suffix')
      table.string('industry')
      table.string('catch_phrase', 1000)
      table.string('bs_company_statement', 1000)
      table.string('logo')
      table.string('type')
      table.string('phone_number')
      table.string('full_address')
      table.double('latitude')
      table.double('longitude')
    })
    .createTable('contributors', table => {
      table.uuid('id').notNullable().primary()
      table.uuid('id_business').references('id').inTable('business')
      table.string('firstName')
      table.string('lastName')
      table.string('title')
      table.string('jobTitle')
      table.integer('age')
    })
    .createTable('desktops', table => {
      table.uuid('id').notNullable().primary()
      table.uuid('id_business').references('id').inTable('business')
      table.string('platform')
      table.string('type')
      table.string('os')
      table.string('ip')
    })
}


const down = (knex) => {
  return knex.schema
    .dropTable("desktops")
    .dropTable("contributors")
    .dropTable("business")
}

module.exports = {
  up,
  down
}