const express = require('express')
const app = express();

const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'USer 3' },
]

app.get('/', (req, res ) => {
    res.send('this is home component')
})

app.get('/login', (req, res) => {
    res.send([1,2,3])
})

app.get('/api/users', (req, res) => {
    res.send(users)
})


app.get('/api/users/:id', (req, res) => {
    const UserRequested = users.find(user => user.id === parseInt(req.params.id) )
    if (!UserRequested) res.status(404).send("The user does not exist")
    res.send(UserRequested)
})


app.get('/api/users/:id/:age', (req, res) => {
    res.send(req.params)
})

app.get('/api/projects/:id/:age', (req, res) => {
    res.send(req.query)
    // { sortBy": "name" } in browser

})




const Port = process.env.Port || 4000
// if I want to set a Port Environment Variable:
// $ export PORT=5000 or any port number.
app.listen(Port, () => console.log(`Listening on port ${Port}...`))