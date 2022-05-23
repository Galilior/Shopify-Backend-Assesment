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
    //     defaultValue: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fih1.redbubble.net%2Fimage.1010589107.5851%2Fraf%2C750x1000%2C075%2Ct%2CFFFFFF%3A97ab1c12de.jpg&imgrefurl=https%3A%2F%2Fwww.redbubble.com%2Fi%2Fkids-t-shirt%2FCute-Bubble-Boba-Milk-Tea-by-Iris%2F43495851.MZ153&tbnid=oIM8TD-4U1fxIM&vet=12ahUKEwj_yK2KwPT3AhX9lYQIHcNnDeUQMygAegUIARDGAg..i&docid=oig_LmDm3YQhZM&w=750&h=1000&q=boba%20cute&ved=2ahUKEwj_yK2KwPT3AhX9lYQIHcNnDeUQMygAegUIARDGAg",
    //     validate: {
    //         notEmpty: true,
    //     }
   //}
})

module.exports = Stock;
