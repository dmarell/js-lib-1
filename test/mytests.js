const StringUtils = require('../lib/string-utils.js')
const Family = require('../lib/family.js')

const greeting = StringUtils.toUpperCase('hej')
console.log('Greeting:', greeting)

const f = new Family('Marell')
const fullName = f.getFullName('Daniel')
console.log(' Hello ', fullName)