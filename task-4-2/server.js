const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get('/now', (request, response) => {
  response.send(new Date().toLocaleTimeString("de-CH", {timeZone: request.query.tz}));
});

const names = [
  "Franz",
  "Nadine",
  "Julia",
  "Geroge"
]

app.post('/names', (req, res) => {
  names.push(req.body.name);
  res.send(names)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
