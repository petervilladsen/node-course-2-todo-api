const { ObjectId } = require('mongodb');
const { mongoos } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var todoId = '5a50fafd23750e128e54482f';
// if (!ObjectId.isValid(todoId)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: todoId
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: todoId
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(todoId).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found...');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userId = '5a500235c218096ab6e06282';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User id not found...');
    }
    console.log('User:', user);
}).catch((e) => console.log(e));