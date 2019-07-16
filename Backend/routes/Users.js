const express = require("express");
const router = express.Router();
const Joi = require("@hapi/joi");

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "USer 3" }
];

// Get all users
router.get("/", (req, res) => {
  res.send(users);
});

// Get a specific user
router.get("/:id", (req, res) => {
  const UserRequested = users.find(user => user.id === parseInt(req.params.id));
  if (!UserRequested) return res.status(404).send("The user does not exist");
  res.send(UserRequested);
});

// Create a new user
router.post("/", (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = {
    id: Math.floor(Math.random() * 100),
    name: req.body.name
  };

  users.push(user);
  res.send(`your just create the new user: ${user.name} with id: ${user.id}`);
});

// Update a user
router.put("/:id", (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("The user does not exist");

  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  user.name = req.body.name;
  res.send(user);
});

// Delete user
router.delete("/:id", (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("The user does not exist");

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.status(200).send(`you just deleted the user ${user.id}`);
});

// ~~~~~~~~~~~~~~~~~~~~~~~ VALIDATION FUNCTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(user, schema);
}

module.exports = router;
