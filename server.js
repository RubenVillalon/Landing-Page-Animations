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
  if (!UserRequested) res.status(404).send("The user does not exist");
  res.send(UserRequested);
});

// create a new user
app.post("/api/users", (req, res) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
});

//update a user
app.get("/api/users/:id", (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) res.status(404).send("The user does not exist");

  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  user.name = req.body.name;
  res.send(user);
});

//getting both integers in the URL into an object with the name properties given in the url path
app.get("/api/users/:id/:age", (req, res) => {
  res.send(req.params);
});

app.get("/api/projects/:id/:age", (req, res) => {
  res.send(req.query);
  // { sortBy": "name" } in browser
});

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(user, schema);
}

const Port = process.env.Port || 4000;
// if I want to set a Port Environment Variable:
// $ export PORT=5000 or any port number.
app.listen(Port, () => console.log(`Listening on port ${Port}...`));
