const moment = require('moment');

// middleware
const logger = (req, res, next) => {
  console.log('run when endpoint is hit')
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`)
  next() //go to next middleware function in the stack
}


module.exports = logger;