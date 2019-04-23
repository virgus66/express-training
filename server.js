const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('<h1>Hello express</h1>')
})


app.listen(PORT, () => console.log(`Server run on port: ${PORT}`))
