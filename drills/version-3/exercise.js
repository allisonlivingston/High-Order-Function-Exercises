function getTotalItemSales(sales, id) {
  let filteredSalesArray = sales.filter(object => {
    return object.itemId == id
  })
  return filteredSalesArray.reduce((totalQuantity, currentQuantity) => {
    return totalQuantity += currentQuantity.quantity
  }, 0)
}

function addTotalSalesToItems(sales, items) {
  return items.map(getItem => {
    getItem.quantity = getTotalItemSales(sales, getItem.id)
    return getItem
  })
}

function addTotalValueToItems(sales, items) {
  return addTotalSalesToItems(sales, items).map(totalCost => {
    totalCost.totalValue = (totalCost.price * totalCost.quantity).toFixed(2)
    return totalCost
  })
}

module.exports = {
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}
