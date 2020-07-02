const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express();
const port = 5000;

app.use('/:productId', express.static(__dirname + '/client/dist'))

app.use('/checkout', createProxyMiddleware({
  target: 'http://localhost:4000',
  changeOrigin: true
}))

app.use('/explorethis', createProxyMiddleware({
  target: 'http://localhost:3141',
  changeOrigin: true
}))

app.use('/photoGallery', createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrigin: true
}))

app.listen(port)