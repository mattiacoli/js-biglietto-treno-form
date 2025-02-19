// get variable from HTML
const formEl = document.getElementById('ticket-form')
const distanceEl = document.getElementById('distance')
const ageEl = document.getElementById('age')
const buttonEl = document.querySelector('button')


// select target element
const targetDistance = document.querySelector('.target .distance')
const targetAge = document.querySelector('.target .age')
const targetPrice = document.querySelector('.target .price')




// add event listener to button for print result in console
formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  // get variable for price and discounts to be applied
  const price = distanceEl.value * 0.21
  const discountUnder = price * 0.2
  const discontOver = price * 0.4

  targetDistance.innerHTML = distanceEl.value
  targetAge.innerHTML = ageEl.value

  if (ageEl.value < 18) {    
    targetPrice.innerHTML = discountUnder.toFixed(2);

  } else if (ageEl.value > 65) {    
    targetPrice.innerHTML = discontOver.toFixed(2);
  } else {
    
    targetPrice.innerHTML = price.toFixed(2);
  }

})

