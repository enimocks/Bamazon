# Bamazon

## Explanation
Basic Amazon-like store functionality -- from the command line interface.

The primary technologies used in this project are Node.js and MySQL. The npm packages "inquirer" and "cli-tables" are also used to gather user input and display available products and details in a table.

Upon running the program, by entering: `node bamazonCustomer.js`, you get a table displaying a list of items, their IDs, the department of the item, the price, and the quantity in stock.

* The npm package inquirer will then ask the user to input the ID # of the item (from the table) that they wish to purchase.
* Then the user is asked how many of that item they would like to purchase.

Finally, the user is presented with their total cost of items purchased. They can continue to shop by reentering `node bamazonCustomer.js`.

## Image Preview
This is the table that the user is initally presented with:

![Image of Product Table](/images/preview-1.png)

![Image of User Input and Output](/images/preview-2.png)