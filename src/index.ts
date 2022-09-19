/**
 * The program calculates the microwave time
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-11-25
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const item = prompt('Enter the item being reheated: ')
const amountItemsString = prompt('Enter the amount of items to reheat: ')
const amountItemsInt = parseInt(amountItemsString)
let itemTime = 1
let percentage = 1
const itemLower = item.toLowerCase()
if (itemLower === 'pizza') {
  itemTime = 45
} else if (itemLower === 'sub') {
  itemTime = 60
} else if (itemLower === 'soup') {
  itemTime = 105
} else {
  console.log('That is not one of the options to reheat.')
}
if (amountItemsInt === 1) {
  percentage = 1
} else if (amountItemsInt === 2) {
  percentage = 1.5
} else if (amountItemsInt === 3) {
  percentage = 2
} else if (isNaN(+amountItemsInt)) {
  console.log('That is not a number.')
} else {
  console.log('That is not too many or not enough items')
}

if (itemTime > 1 && percentage > 1) {
  const time = itemTime * percentage
  console.log(`The time in the microwave is ${time} seconds.`)
}
console.log('\nDone.')
