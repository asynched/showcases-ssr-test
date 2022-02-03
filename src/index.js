import express from 'express'
import axios from 'axios'
import debug from 'debug'

import routerLogger from './middlewares/router-logger'
import { sanitizeProduct } from './helpers/product'
import { getRandomTerm } from './helpers/terms'
import catalog from '../data.json'

const LOCAL = false

const logger = debug('app:server')
const app = express()

app.use(express.static('public'))
app.use(routerLogger(logger))

app.set('view engine', 'ejs')
app.set('views', 'src/views')

const getProducts = async () => {
  if (LOCAL) {
    return catalog
  }

  const url =
    'https://api.mercadolibre.com/sites/MLB/search?q=' + getRandomTerm()

  const { data } = await axios.get(url)
  const products = data.results

  return products
}

app.get('/showcase', async (req, res) => {
  const products = await getProducts()

  res.render('showcase', {
    title: 'iPhone showcase',
    products: products.slice(0, 10).map(sanitizeProduct),
  })
})

app.listen(3333, () => logger('[INFO] Server started on port ":3333" 🚀'))
