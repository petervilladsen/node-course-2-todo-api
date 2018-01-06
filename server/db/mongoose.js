var mongoose = require('mongoose');

const dbUrl = process.env.PORT ? 'mongodb://todo:todo_@ds247047.mlab.com:47047/todoap' : 'mongodb://localhost:27017/TodoApp';
// If db is on Heroku use process.env.MONGODB_URI

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

module.exports = {
    mongoose
}