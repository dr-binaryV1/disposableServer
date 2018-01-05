module.exports.typeCheck = function typeCheck(data, re, res) {
  if (data.match(re)) {
    res.status(200).send('OK');
  } else {
    res.status(500).send('Bad Request');
  }
}

module.exports.numCheck = function numCheck(data, res) {
  if(typeof data === "number" ) {
    res.status(200).send('OK');
  } else {
    res.status(500).send('Bad Request');
  }
}