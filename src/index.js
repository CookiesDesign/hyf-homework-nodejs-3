const express = require('express');
const app = express();
const port = 3000;

const list = [];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', (req,res) =>  res.json( list ));

app.post('/users', (req,res) => {
    list.push({id:0});
    res.json(user);
});

app.get('/user/:id', (req,res) => {
    const user = list.find(usr => usr.id === req.params.id);
    res.json(user)
});

app.listen(port, () => console.log(`Server on port ${port}!`))