var version2 = require('../data/version2-data.js')

// ///////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from version2 to a variable, then return that variable
function accessesingData1 () {
  return version2['sale dates']['Banana Bunches']
}

// Using a built-in array property return the total sale dates there are for version2's 'Banana Bunches'
function accessesingData2 () {
  return version2['sale dates']['Banana Bunches'].length
}

// ///////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in version2. Then reassign it to a new value. When you update your new variable, does the price in the version2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1 () {
  var mintPrices = version2['inventory prices']['Mint Wafers']
  mintPrices = 123
  // console.log(version2['inventory prices']['Mint Wafers'])
  return false // it's accessed by value, not reference
}

// Set a variable equal to the 'Caramel Twists' sale dates in version2. Use pop to remove one of the sale dates for version2's 'Caramel Twists'. Does your variables value match up with what is in version2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2 () {
  var caramelDates = version2['sale dates']['Caramel Twists']
  caramelDates.pop()
  // console.log(caramelDates);
  return true // passed by reference and changes are done on the original data
}

// ///////// LOOPING OVER DATA ///////////

// Iterate over the version2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2015-01-06': 4,
//   '2015-01-07': 3,
// }
function loopingData1 () {
  let caramel = {}
  for (let date of version2['sale dates']['Caramel Twists']) {
    // initialize the index if it's not set before incrementing
    if (caramel[date] === undefined) { caramel[date] = 0 }
    caramel[date] += 1
  }

  return caramel
}

// Iterate over version2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2 () {
  let salesCount = {}
  // use the for in loop to iterate over the properties of the object
  for (let name in version2['sale dates']) {
    for (let date of version2['sale dates'][name]) {
      if (salesCount[date] === undefined) { salesCount[date] = 0 }
      salesCount[date] += 1
    }
  }

  let biggestDay = null
  let biggestDayCount = 0
  for (date in salesCount) {
    if (salesCount[date] > biggestDayCount) {
      biggestDayCount = salesCount[date]
      biggestDay = date
    }
  }

  return biggestDay
}

// ///////// CHALLENGE ///////////

// Create and return an object containing the amounts that version2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1 () {
  let salesTotal = {}
  for (let name in version2['sale dates']) {
    for (let date of version2['sale dates'][name]) {
      let price = version2['inventory prices'][name]
      if (salesTotal[name] === undefined) { salesTotal[name] = 0 }
      salesTotal[name] += price
    }
  }

  // format data
  for (let name in salesTotal) {
    salesTotal[name] = salesTotal[name].toFixed(2)
  }

  return salesTotal
}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
