const UrlIndex = require('../models/urlIndex')

// Generate random shortURL
const generator = (length) => {
  const charRef = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * charRef.length)
    result += charRef[index]
  }

  // Check if random url already exist
  return UrlIndex.findOne({ shortenUrl: result })
    .then(data => {
      return data ? generator(length) : result
    })
}

module.exports = generator
