

function candySalesToObject(candyArray) {

  return candyArray.reduce(function(saleObject, currentItem, index) {
    switch(index) {
      case 0:
        saleObject.item = currentItem
        break
      case 1:
        saleObject.price = parseFloat(currentItem)
        break
      case 2:
        saleObject.quantity = currentItem
        break
    }
    return saleObject
  }, {})
}

function salesDayToObject(date, daySales) {
  return daySales[date].reduce(function(object, currentValue) {
    object.date = date
    object.sales.push(candySalesToObject(currentValue))
    return object
  }, {"sales": []})
}





module.exports = {
candySalesToObject,
    salesDayToObject,
    // allSalesToArray
};
