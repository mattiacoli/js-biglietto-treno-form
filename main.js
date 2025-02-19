// get variable from HTML
const formEl = document.getElementById('ticket-form')
const distanceEl = document.getElementById('distance')
const ageEl = document.getElementById('age')
const buttonEl = document.querySelector('button')
const nameEl = document.getElementById('name')




// select target element
const targetPassenger = document.querySelector('.ticket-info .name-passenger')
const targetDistance = document.querySelector('.ticket-info .distance')
const targetAge = document.querySelector('.ticket-info .age')
const targetPrice = document.querySelector('.ticket-info .price')




// add event listener to button for print result in console
formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  // get variable for price and discounts to be applied
  const price = distanceEl.value * 0.21
  const discountUnder = price * 0.2
  const discontOver = price * 0.4
  targetPassenger.innerHTML=nameEl.value
  targetDistance.innerHTML = distanceEl.value + ' ' + 'km'
  targetAge.innerHTML = ageEl.value

  if (ageEl.value < 18) {    
    targetPrice.innerHTML = discountUnder.toFixed(2) +' '+ 'euro';

  } else if (ageEl.value > 65) {    
    targetPrice.innerHTML = discontOver.toFixed(2) +' '+ 'euro';
  } else {
    
    targetPrice.innerHTML = price.toFixed(2) +' '+ 'euro';
  }

})

