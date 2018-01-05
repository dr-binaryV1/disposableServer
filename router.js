const typeCheck = require('./controller').typeCheck;
const numCheck = require('./controller').numCheck;

module.exports = function (app) {
  app.post('/name', (req, res) => {
    typeCheck(req.body.name, /^[a-zA-Z]+$/, res)
  }),

  app.post('/number', (req, res) => {
    numCheck(req.body.number, res)
  }),

  app.post('/address', (req, res) => {
    typeCheck(req.body.address, /^[a-z0-9]+$/i, res)
  });
}