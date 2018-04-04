function getItemById(item, itemId) {
  return item.filter(object => {
    return object.id == itemId
  })[0]
}

function buildTransactions(sales, items) {
  return sales.map(transaction => {
    let newSalesArray = Object.assign(transaction, getItemById(items, transaction.itemId))

    delete newSalesArray.id
    return newSalesArray
  })
}

function getTransactionsByItemDescription(transactions, description) {
  return transactions.filter(sales => {
    return sales.description == description
  })
}

module.exports = {
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
