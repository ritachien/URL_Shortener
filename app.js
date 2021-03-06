// Import modules and set related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

require('./config/mongoose')
const UrlIndex = require('./models/urlIndex')
const ShortGenerator = require('./utils/shortGenerator')

const app = express()

// User optional settings for shortenUrl
// Default output: 'http://localhost:{port}/{5RandomText}'
const port = 3000
const urlBasic = `http://localhost:${port}/`
const randomLength = 5

// Set view engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// Set Routes
// Read: input URL to be converted
app.get('/', (req, res) => {
  res.render('index')
})

// Create: create index after convert
app.post('/', (req, res) => {
  // Check if user input already in URL index
  UrlIndex.findOne({ originalUrl: req.body.url })
    .then(urlData => {
      ShortGenerator(randomLength)
        // generate new shortURL
        .then(url => {
          // If already exist, use old one. If not yet exist, create new one.
          return urlData ? urlData : UrlIndex.create({
            shortenUrl: url,
            originalUrl: req.body.url
          })
        })
        .then(urlData => {
          urlData = urlData.toObject()
          res.render('index', { urlBasic, urlData })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


// Read: convert link from shortenURL to OriginalURL
app.get('/:shortenUrl', (req, res) => {
  const { shortenUrl } = req.params
  UrlIndex.findOne({ shortenUrl })
    .then(data => {
      if (!data) {
        const errorURL = `${urlBasic + shortenUrl}`
        return res.render('index', { errorURL })
      }
      res.redirect(data.originalUrl)
    })
    .catch(err => console.log(err))
})


// Listen the server
app.listen(port, () => {
  console.log(`App is running on ${urlBasic}`)
})
