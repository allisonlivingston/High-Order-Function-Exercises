// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.
var candyStore3 = require('../data/candyStore3-data.js')

// ()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for candyStore3 on January 7.
function accessesingData1 () {
  return candyStore3[1]['inventory sold']['Berry Bites']
}

// Return how many Mint Wafers were sold on January 9th
function accessesingData2 () {
  return candyStore3[3]['inventory sold']['Mint Wafers']['quantity']
}

// Return total number of dates included in the dataset.
function accessesingData3 () {
  return candyStore3.length
}

// ()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from candyStore3. Use this loop to return an array of dates contained in the sale data.
function loopingData1 () {
  let dates = []
  for (let data of candyStore3) {
    dates.push(data.date)
  }
  return dates
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in candyStore3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2 () {
  let result = {}
  var inventory = candyStore3[4]['inventory sold']
  for (let name of Object.keys(inventory)) {
    result[name] = inventory[name]['cost']
  }
  return result
}

// Create a loop to iterate over the whole candyStore3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3 () {
  let count = 0
  for (let data of candyStore3) {
    for (let inventory in data['inventory sold']) {
      if (inventory === 'Peanut Butter Buttered Peanuts') {
        count++
      }
    }
  }
  return count
}

// ()()()()() CHALLENGE ()()()()()\\

// Determine how much money candyStore3 made on January 9th and return the result fixed to two decimal points
function challenge1 () {
  let sum = 0
  let inventory = candyStore3[3]['inventory sold']
  for (let name in inventory) {
    sum += inventory[name]['cost'] * inventory[name]['quantity']
  }
  return sum.toFixed(2)
}

module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
