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
connection.connect(function (err) {
  if (err) throw err;
  // run the displayProducts function after the connection is made to show product details
  displayProducts();
});

function displayProducts() {
  connection.query("SELECT * FROM products", function (err, res) {

    var table = new Table({
      head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity'],
      colWidths: [10, 40, 20, 10, 20]
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
        validate: function (input) {
          if (isNaN(input) === false && input !== '')  {
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
        validate: function (input) {
          if (isNaN(input) === false && input !== '') {
            return true;
          } else {
            return false;
          }
        }
      }
    ]).then(function (answer) {
      var querySQL = `SELECT * FROM products WHERE item_id = ${answer.ItemID}`

      connection.query(querySQL, function (err, res) {

          if (answer.Quantity > res[0].stock_quantity) {
            console.log('Sorry, not enough stock to fill this order. Please check back later.')
          } else {
            console.log('Great! Your order will be filled.')

            var total = answer.Quantity * res[0].price;
            var updatedStock = res[0].stock_quantity - answer.Quantity;
            
            //////////// FOR TESTING
            console.log(total);
            console.log(updatedStock);

            console.log(`Your total price is $${total.toFixed(2)}`);

            updateMySQL(updatedStock, answer.ItemID);
          }
      });
    }); // end of .then promise
}

function updateMySQL(updatedStock, ItemID) {
  // use ES6 string templating for SQL staments
  var updateQuery = ` 
  UPDATE products
  SET stock_quantity = ${updatedStock}
  WHERE item_id = ${ItemID};`;

  connection.query(updateQuery, function (err, res) {
    connection.end();
  });
}


// QUESTIONS:
// Node DeprecationWarning when running program