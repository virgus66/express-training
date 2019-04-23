const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger');


const app = express();
const PORT = process.env.PORT || 5000;

// ================ Serve code or single file
// app.get('/', (req, res) => {
//   // res.send('<h1>Hello express!</h1>')
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// serve entire static folder
app.use(express.static(path.join(__dirname, 'public')))

// ===========================================


// ================ example API
app.use(logger) //init middleware

// let customers = fs.readFileSync('sussex-emails.json', 'utf8')
// customers =  JSON.parse(customers);
// app.get('/api/members', (req, res) => {

//   res.json( customers )
// })

// app.get('/api/member/:id', (req, res) => {
//   const found = customers.data[req.params.id] ? true : false;
//   // res.send(req.params.id)
//   // res.json( customers.data.filter( c => c.email == "rhinnon.west@icloud.com" ) )

//   if (found) {
//     res.json({ data: customers.data[req.params.id], status: 400 })
//   }
//   else res.status(400).json({message: `No member with :id ${req.params.id}`, status: 400})
// })

app.use('/api', require('./routes/api/customers'))

// ===========================================



// ================ start sevrer
app.listen(PORT, () => console.log(`Server run on port: ${PORT}`))


