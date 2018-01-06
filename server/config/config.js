var env = process.env.NODE_ENV || 'development';
// const dbUrl = process.env.PORT ? 'mongodb://todo:todo_@ds247047.mlab.com:47047/todoap' : 'mongodb://localhost:27017/TodoApp';
// If db is on Heroku use 
console.log('ENV ******', env);
if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else if (env === 'production') {
    process.env.MONGODB_URI = 'mongodb://todo:todo_@ds247047.mlab.com:47047/todoap';
}