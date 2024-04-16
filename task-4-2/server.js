const express = require('express');
const app = express();
const port = 3000;

app.get('/now', (request, response) => {
  response.send(new Date().toLocaleTimeString("de-CH", {timeZone: request.query.tz}));

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
