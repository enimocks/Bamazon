// add required dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const Table = require('cli-table');

// setup required connection info for connecting to mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "newuser",

  // Your password
  password: "ABCxyz1!",
  database: "Bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the displayProducts function after the connection is made to show product details
  displayProducts();
});

function displayProducts() {
  connection.query("SELECT * FROM products", function(err, res) {

    var table = new Table({
      head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity'],
      colWidths: [10, 40, 20, 10, 15]
    });

    for (var i = 0; i < res.length; i++) {

      table.push(
        [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
      );
      console.log(table.toString());
    }
    addItems();
  });
}

function addItems() {
  inquirer
    .prompt([
      {
        name: 'ItemID',
        type: 'input',
        message: 'What is the Item ID of the product you would like to purchase?',
        validate: function(input) {
          if (isNaN(input) === false) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        name: 'Quantity',
        type: 'input',
        message: 'How many would you like to purchase?',
        validate: function(input) {
          if (isNaN(input) === false) {
            return true;
          } else {
            return false;
          }
        }
      }
    ]).then(function(answer) {
      var querySQL = `SELECT * FROM products WHERE item-id = ${answer.ItemID}`
    })
  connection.query(querySQL, function(err, res) {
    console.log(res);
  })
}