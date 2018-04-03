
// let salesObject = {
//   item: "",
//   price: "",
//   quantity: ""
// }

function candySalesToObject(array) {
  let priceToNumber = parseFloat(array[1])

  return array.reduce(function(accumulator, currentValue, index) {
    switch(index) {
      case 0:
        accumulator.item = currentValue
        break
      case 1:
        accumulator.price = currentValue
        break
      case 2:
        accumulator.quantity = currentValue
        break
    }
    return accumulator
  }, {})
}




  //
  // array.map(function(item) {
  //   return salesObject.item = array[0]
  // })
  // array.map(function(item) {
  //   // return salesObject.item = array[0]
  //   return salesObject.price = priceToNumber
  //   // salesObject.quantity = array[2]
  // })
  // array.map(function(item) {
  //   // return salesObject.item = array[0]
  //   // return salesObject.price = priceToNumber
  //   return salesObject.quantity = array[2]
  // })
  // console.log(salesObject)

function salesDayToObject(date, day) {
  return
}



module.exports = {
candySalesToObject,
    salesDayToObject,
    // allSalesToArray
};
