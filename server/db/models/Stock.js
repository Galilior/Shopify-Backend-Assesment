const Sequelize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');

const Stock = db.define('stock', {
    name: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     notEmpty: true
        //}
    },
    qty: {
        type: Sequelize.FLOAT,
        // allowNull: false,
        // validate: {
        //     notEmpty: true,
        //     min: 0
        // }
    },
    // img: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     defaultValue: "data:image/jpeg;base64,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",
    //     validate: {
    //         notEmpty: true,
    //     }
   // }
})

module.exports = Stock;
/**
 * instanceMethods
 */
// User.prototype.correctPassword = function(candidatePwd) {
//   //we need to compare the plain version to an encrypted version of the password
//   return bcrypt.compare(candidatePwd, this.password);
// }

// User.prototype.generateToken = function() {
//   return jwt.sign({id: this.id}, process.env.JWT)
// }

/**
 * classMethods
 */
// User.authenticate = async function({ username, password }){
//     const user = await this.findOne({where: { username }})
//     if (!user || !(await user.correctPassword(password))) {
//       const error = Error('Incorrect username/password');
//       error.status = 401;
//       throw error;
//     }
//     return user.generateToken();
// };

// User.findByToken = async function(token) {
//   try {
//     const {id} = await jwt.verify(token, process.env.JWT)
//     const user = User.findByPk(id)
//     if (!user) {
//       throw 'nooo'
//     }
//     return user
//   } catch (ex) {
//     const error = Error('bad token')
//     error.status = 401
//     throw error
//   }
// }

/**
 * hooks
 */
// const hashPassword = async(user) => {
//   //in case the password has been changed, we want to encrypt it with bcrypt
//   if (user.changed('password')) {
//     user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
//   }
// }

// User.beforeCreate(hashPassword)
// User.beforeUpdate(hashPassword)
// User.beforeBulkCreate(users => Promise.all(users.map(hashPassword)))
