var version1 = require('../data/version1-data.js')

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from version1
function accessesingData1 () {
  return version1['2015-01-08'][0][1]
}

// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2 () {
  return version1['2015-01-06'][1][2]
}

// *********** LOOPING OVER DATA *********** \\

// Create a loop to read which candies were sold by version1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopingData1 () {
  let names = []
  // note: it is fine to use a regular for loop, but since we don't need the index for
  // anything, the for of loop is a good choice
  for (let data of version1['2015-01-08']) {
    names.push(data[0])
  }

  return names
}

// Create a loop to count the total number of candies sold on Jan 10 at version1. Where do you have to initialize the counter variable? Why?
function loopingData2 () {
  let total = 0
  for (let data of version1['2015-01-10']) {
    total += data[2]
  }
  return total
}

// Use `Object.keys()` to get an array of the dates that candies were sold at version1.
function loopingData3 () {
  return Object.keys(version1)
}

// Use a loop to calculate the total number of candies sold at version1.
function loopingData4 () {
  let total = 0
  for (let date of Object.keys(version1)) {
    for (let data of version1[date]) {
      total += data[2]
    }
  }
  return total
}

// In the previous exercise, where did you have to initialize the counter variable? Why?
function loopingData5 () {
  return 'first line outside the loop'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by version1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1 () {
  let total = 0
  for (let data of version1['2015-01-10']) {
    total += data[1] * data[2]
  }

  return total.toFixed(2)
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
