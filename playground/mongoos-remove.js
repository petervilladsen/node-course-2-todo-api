const { ObjectId } = require('mongodb');
const { mongoos } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// remove all
// Todo.remove({});
// Todo.findOneAndRemove
// Todo.findByIdAndRemove