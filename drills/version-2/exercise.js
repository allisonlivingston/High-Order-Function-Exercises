function getItemById(items, itemId) {

  return items.filter(function(object) {
    return object.id == itemId
  }) [0]
}

function buildTransactions(sales, items) {
  return sales.map(function(transaction) {
  let newSalesArray = Object.assign(transaction, getItemById(items, transaction.itemId))

  delete newSalesArray.id
  return newSalesArray
  })
  console.log(sales);
}

function getTransactionsByItemDescription(transactions, description) {
  return transactions.filter(function(sales) {
    return sales.description == description
  })
}

module.exports = {
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
