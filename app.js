const express = require('express');
const res = require('express/lib/response');
const app = express();
const router = express.Router();

app.listen(3001, () => {
  console.log('server on now!');
})

app.use(express.json())
app.use('/', router);

let routes = [
  {
    method: 'get',
    url: '/one',
    target: one
  },
  {
    method: 'post',
    url: '/two',
    target: two
  },
  {
    method: 'get',
    url: '/three',
    target: three
  }
]

routes.forEach(route => {
  router[route.method].apply(router, [route.url, route.target]);
})

function one(req, res) {
  res.send({m: 'one dont'})
}
function two(req, res) {
  res.send(req.body)
}
function three(req, res) {
  res.send({m: 'three done'})
}