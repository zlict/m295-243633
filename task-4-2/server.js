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
});

app.get('/chuck', async (req, res) => {
  const name = req.query.name;

  const jokeResponse = await fetch('https://api.chucknorris.io/jokes/random');
  const jokeJson = await jokeResponse.json();

  res.send(jokeJson.value.replace("Chuck Norris", name));
})

const about = {
  forename: "Robin",
  surname: "Bühler",
  age: 30,
  place: "Männedorf",
  eyeColor: "brown"
}

app.get('/me', (req, res) => {
  res.send(about);
});

app.patch('/me', (req, res) => {
  res.send({...about, ...req.body});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
