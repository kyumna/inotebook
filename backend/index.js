const connectToMongo=require('./db');
const express = require('express')
connectToMongo()
const app = express()
const port = 3000

app.use(express.json())

//Available Routes

app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/notes',require('./routes/notes.js'))


app.get('/', (req, res) => {
  res.send('Bye World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})