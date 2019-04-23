const express = require('express')
const router = express.Router()
const fs = require('fs');

let customers = fs.readFileSync(__dirname + '/sussex-emails.json', 'utf8')
customers =  JSON.parse(customers);

router.get('/members', (req, res) => res.json(customers) )

router.get('/member/:id', (req, res) => {
  // res.send(req.params.id)
  // res.json( customers.data.filter( c => c.email == "rhinnon.west@icloud.com" ) )
  
  const found = customers.data[req.params.id] ? true : false;
  if (found) {
    res.json({ data: customers.data[req.params.id], status: 400 })
  }
  else res.status(400).json({message: `No member with :id ${req.params.id}`, status: 400})
})


module.exports = router;