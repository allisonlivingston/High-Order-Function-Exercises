## Candy Shop

You are working with a candy shop API that returns `items` and `sales`. You need to build transactions out of these two lists that combine the data in them in `exercise.js`.

## Data Format

### Items

```js
[{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38
}];
```

### Sales

```js
[{
    itemId: 1,
    quantity: 2
},{
    itemId: 2,
    quantity: 2
},{
    itemId: 1,
    quantity: 2
},{
    itemId: 3,
    quantity: 3
}];
```

### Target Transactions

```js
[{
    itemId: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 2
},{
    itemId: 2,
    description: "Mint Wafers",
    price: 1.09,
    quantity: 2
},{
    itemId: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 2
},{
    itemId: 3,
    description: "Peppermint Poppers",
    price: 2.38,
    quantity: 3
}];
```

## Setup

1. Run `npm install`
1. Write your code in `exercise.js` as functions that return the result
1. Run `npm test` on the command line to verify your code.

## Instructions

* Write a function called `getItemById` that takes a list of items and an item ID, and returns a matching object. For example, given the items list and the id `2`, you should return:

```js
{
    item: "Mint Wafers",
    price: 1.19,
    quantity: 2
}
```

* Write a function called `buildTransactions` that takes a list of sales and a list of items and returns the sales with the correct items appended to each transaction. For example, given the list of sales and the list of items, you should return:

```js
[{
    itemId: 1,
    description: "Dark Chocolate Crunchies",
    itemPrice: 4.29,
    quantity: 2
},{
    itemId: 2,
    description: "Mint Wafers",
    itemPrice: 1.09,
    quantity: 2
},{
    itemId: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 2
},{
    itemId: 3,
    description: "Peppermint Poppers",
    price: 2.38,
    quantity: 3
}]
```

Note that the `id` property from the `item` should be removed. Feel free to reuse your function from the previous example.

* Write a function called `getTransactionsByItemDescription` that takes the list of full transactions and an item description, and returns any matching sales. For example, if you give it the list of transactions and "Dark Chocolate Crunchies", you should return:

```js
[{
    itemId: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 2
},{
    itemId: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 2
}];
```

Feel free to reuse your function from the previous example.
