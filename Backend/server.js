const express = require("express");
const app = express();
app.use(express.json());

const users = require('./routes/Users')
app.use('/api/users', users)



app.get("/login", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/projects/:id/:age", (req, res) => {
  res.send(req.query);
  // { sortBy": "name" } in browser
});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PORTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
const Port = process.env.Port || 4000;
// if I want to set a Port Environment Variable:
// $ export PORT=5000 or any port number.
app.listen(Port, () => console.log(`Listening on port ${Port}...`));
