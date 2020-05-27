const express = require("express");

const PORT = 1234;
const app = express();

const data = require('./fsxnet.json');

app.get('/fsxnet', function (req, res) {
  res.json(data);
})
app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});
