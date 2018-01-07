const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

var hashedPassword = '$2a$10$dUzif6aC2g17i43xDc542eyLYHV0oXy5V2r4cEIgnei/XYZ4Vf5s6';

bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result);
});

// var data = {
//     id: 10
// }

// var token = jwt.sign(data, '123abc');
// console.log('Token', token);

// var decoded = jwt.verify(token, '123abc');
// console.log('Decoded', decoded);

// var message = 'I am user #3';
// var hash = SHA256(message).toString();

// console.log('Message: ', message);
// console.log('Hash:', hash);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();


// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!!!')
// }