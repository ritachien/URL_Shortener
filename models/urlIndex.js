const mongoose = require('mongoose')
const UrlSchema = new mongoose.Schema({
  shortenUrl: { type: String, required: true },
  originalUrl: { type: String, required: true }
})

module.exports = mongoose.model('UrlIndex', UrlSchema)
