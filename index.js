const express = require('express');
const app = express();
const df_ff = require('dialogflow-fulfillment');

app.get('/', function (req, res) {
  res.send('test test test');
});

app.post('/', express.json(), (req, res) => {
  const agent = new df_ff.WebhookClient({
    request: req,
    response: res
  });

  function add(agent) {
    var sum = 0;
    req.body.queryResult.parameters.number.forEach( x => sum += x);
    agent.add('The result is ' + sum);
  }

  console.log(JSON.stringify(req.body));

  var intentMap = new Map();

  intentMap.set('addition', add);

  agent.handleRequest(intentMap);
});

app.get('/subtract', function (req, res) {
  res.send('Subtracting numbers from eachother');
});

app.get('/division', function (req, res) {
  res.send('Dividing numbers by eachother');
});

app.get('/multiplication', function (req, res) {
  res.send('Multiplying numbers together');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
