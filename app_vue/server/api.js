const app = require('express')()

const apiHelper = require('./apiHelper')

module.exports = { path: '/api', handler: app }
app.get('/hello', (req, res) => {
  console.log('hello nuxt in text')
  res.send('world')
})

app.get('/questions', (req, res) => {
  apiHelper
    .make_API_call('http://localhost:3001/questions')
    .then((response) => {
      res.json(response)
    })
    .catch((error) => {
      console.log(response)
      res.send(error)
    })
})

app.get('/vehicles/:type', (req, res) => {
  let url = 'http://localhost:3001/vehicles?type='

  if (req.params.type) {
    switch (req.params.type) {
      case 'family':
        url += '1'
        break
      case 'sport':
        url += '2'
        break

      default:
        break
    }
  }

  apiHelper
    .make_API_call(url)
    .then((response) => {
      res.json(response)
    })
    .catch((error) => {
      console.log(response)
      res.send(error)
    })
})
