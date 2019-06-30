const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')

// Import custom helpers
const apiHelper = require('./apiHelper')

config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  app.get('/', (req, res, next) => {
    res.send('API root')
  })

  app.get('/api/questions', (req, res) => {
    apiHelper
      .make_API_call('//localhost:3001/questions')
      .then((response) => {
        res.json(response)
      })
      .catch((error) => {
        res.send(error)
      })
  })

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

module.exports = {
  path: '/server',
  handler: app
}
