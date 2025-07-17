exports.getMessage = (req, res) => {
  res.send("I am a get request.");
};

exports.postMessage = (req, res) => {
  res.send("I am a post request.");
};
