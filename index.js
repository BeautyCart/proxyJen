const http = require('http')
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:4000' })
})

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3141' })
})

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' })
})

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3003' })
})

server.listen(80);