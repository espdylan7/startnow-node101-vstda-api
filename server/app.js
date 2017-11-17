const express = require('express');
const morgan = require('morgan');
const http = require('http')
const bodyparser = require('body-parser');
const request = require('request');
const app = express();

var data = [{
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];
//Get
app.get('/', function (req, res) {
  res.json(200)
});


app.get('/api/TodoItems', (req, res) => {
  res.send(data)
});


app.get('/api/TodoItems/:id', (req, res) => {
  console.log(req.params.id)
  res.send(data[req.params.id]);
});
//POST
app.post('/api/TodoItems/', (req, res) => {
  var number = 0;
  number1 = 1;
  var string = 'Ok';
  var boolean = true


  let dataArray = {
    todoItemId: number,
    name: string,
    priority: number1,
    completed: boolean
  }
  res.status(201).send(dataArray);

});
//DELETE
app.delete('/api/TodoItems/:id', (req, res) => {
  for (var i = 0; i < data.length; i++) {
    res.send(data[0])
  }
  res.send(data[0])
});


module.exports = app;
