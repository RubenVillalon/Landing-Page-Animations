const express = require("express");
const app = express();
const Joi = require("@hapi/joi");

app.use(express.json());

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "USer 3" }
];

app.get("/", (req, res) => {
  res.send("this is home component");
});

app.get("/login", (req, res) => {
  res.send([1, 2, 3]);
});

// get all users
app.get("/api/users", (req, res) => {
  res.send(users);
});

// get a specific user
app.get("/api/users/:id", (req, res) => {
  const UserRequested = users.find(user => user.id === parseInt(req.params.id));
  if (!UserRequested) return res.status(404).send("The user does not exist");
  res.send(UserRequested);
});

// create a new user
app.post("/api/users", (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = {
    id: Math.floor(Math.random()*100),
    name: req.body.name
  };

  users.push(user);
  res.send(`your just create the new user: ${user.name} with id: ${user.id}`);
});

//update a user
app.put("/api/users/:id", (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("The user does not exist");

  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  user.name = req.body.name;
  res.send(user);
});

app.delete("/api/users/:id", (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("The user does not exist");

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.status(200).send(`you just deleted the user ${user.id}`);
});

//getting both integers in the URL into an object with the name properties given in the url path
app.get("/api/users/:id/:age", (req, res) => {
  res.send(req.params);
});

app.get("/api/projects/:id/:age", (req, res) => {
  res.send(req.query);
  // { sortBy": "name" } in browser
});

// ~~~~~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(user, schema);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PORTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
const Port = process.env.Port || 4000;
// if I want to set a Port Environment Variable:
// $ export PORT=5000 or any port number.
app.listen(Port, () => console.log(`Listening on port ${Port}...`));
