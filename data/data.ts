const data = require('./data.json')
const { v4: uuidv4 } = require('uuid')

interface Contributor {
  id: string
  id_business: string
  firstName: string
  lastName: string
  title: string
  jobTitle: string
  age: number
}

interface Desktop {
  id: string
  id_business: string
  platform: string
  type: string
  os: string
  ip: string
}

interface Business {
  id: number
  business_name: string
  suffix: string
  industry: string
  catch_phrase: string
  bs_company_statement: string
  logo: string
  type: string
  phone_number: string
  full_address: string
  latitude: number
  longitude: number
  contributors?: Contributor[]
  desktops?: Desktop[]
}
const knex = require('knex')
const businesses: Business[] = data as Business[]
let desktops: Desktop[] = []
let contributors: Contributor[] = []

businesses.map(business => {
  const id = uuidv4()
  business.id = id

  business.contributors.map(contributor => {
    contributor.id = uuidv4()
    contributor.id_business = id
    return contributor
  })
  business.desktops.map(desktop => {
    desktop.id = uuidv4()
    desktop.id_business = id
    return desktop
  })

  desktops = [...desktops, ...business.desktops]
  contributors = [...contributors, ...business.contributors]

  delete business.contributors
  delete business.desktops
  return business
});


module.exports = {
  businesses,
  desktops,
  contributors
}