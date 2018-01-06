var express = require('express');
var bodyParser = require('body-parser');
var { ObjectId } = require('mongodb');

var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/todo.js');
var { User } = require('./models/user.js');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    var todo = new Todo({
        text: request.body.text
    });

    todo.save().then((doc) => {
        response.send(doc);
    }, (error) => {
        response.status(400).send(error);
    })
});

app.get('/todos', (request, response) => {
    Todo.find().then((todos) => {
        response.send({ todos });
    }, (e) => {
        response.status(400).send(e);
    });
});

app.get('/todos/:id', (request, response) => {
    var id = request.params.id;

    if (!ObjectId.isValid(id)) {
        return response.status(404).send();
    }

    Todo.findById(request.params.id).then((todo) => {
        if (!todo) {
            return response.status(404).send();
        }
        response.send({ todo });
    }, (e) => response.status(400).send());
});

app.delete('/todos/:id', (request, response) => {
    var id = request.params.id;

    if (!ObjectId.isValid(id)) {
        return response.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return response.status(404).send();
        }
        response.send({ todo });
    }, (e) => response.status(400).send());
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };