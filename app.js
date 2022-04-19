// Import modules and set related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// Set view engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


// Set Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const newUrl = req.body.url
  console.log(newUrl)
  res.render('index', { newUrl })
})

// Listen the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})