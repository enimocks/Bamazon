# Bamazon

## Explanation
Basic Amazon-like store functionality -- from the command line interface.

The primary technologies used in this project are Node.js and MySQL. The npm packages "inquirer" and "cli-tables" are also used to gather user input and display available products and details in a table.

Upon running the program, by entering: `node bamazonCustomer.js`, you get a table displaying a list of items, their IDs, the department of the item, the price, and the quantity in stock.

* The npm package inquirer will then ask the user to input the ID # of the item (from the table) that they wish to purchase.
* Then the user is asked how many of that item they would like to purchase.

Finally, the user is presented with their total cost of items purchased. They can continue to shop by reentering `node bamazonCustomer.js`.

## Other Notes
* Input validation with inquirer prevents the user from entering empty strings, non-numbers, and IDs outside the range of available IDs.
* If a user tries to purchase more of an item than the store has in stock, they are alerted that there is not enough inventory and to check back later.

## Image Preview
This is the table that the user is initally presented with:

![Image of Product Table](/images/preview-1.png)

This is the output given after the user has entered the item ID and quantity.

![Image of User Input and Output](/images/preview-2.png)

Finally, you can see that the inventory for "The Great Gatsby" has been cleared out (the next time the app is loaded).

![Image of Inventory Change](/images/preview-3.png)
