var express = require('express');
var router = express.Router();

module.exports = (dbHelpers) => {

  router.get('/', (req, res) => {

    dbHelpers
      .getInfo()
      .then(info => res.json(info))
      .catch(err => res.json({ error: err.message }))
  })
  return router;
}