  
const express = require('express');
const app = express();
const port = 3000;

let list = [];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req,res) =>  res.json( list ));

app.get('/user/:id', (req,res) => {     
    const user = list.find(usr => usr.id == req.params.id);
    res.json(user);
});

app.post('/user', (req,res) => {         
    list.push({id: 0}); 
    res.json(list);
});

app.listen(port, () => console.log(`Server on port ${port}!`))