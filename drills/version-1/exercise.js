function candySalesToObject(candyArray) {
  return candyArray.reduce((saleObject, currentItem, index) => {
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

function salesDayToObject(currentDate, daySales) {
  return daySales[currentDate].reduce((object, currentValue) => {
    object.date = currentDate
    object.sales.push(candySalesToObject(currentValue))
    return object
  }, {"sales": []})
}

function allSalesToArray(completeSalesObject) {
  return Object.keys(completeSalesObject).map(currentDate => salesDayToObject(currentDate, completeSalesObject))
}

module.exports = {
candySalesToObject,
    salesDayToObject,
    allSalesToArray
};
