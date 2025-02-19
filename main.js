// get variable from HTML
const distanceEl = document.getElementById('distance')
const ageEl = document.getElementById('age')
const buttonEl = document.querySelector('button')

console.log(distanceEl, ageEl, buttonEl);


// get variable for price and discounts to be applied
const price = distanceEl.value * 0.21
const discountUnder = price * 0.2
const discontOver = price * 0.4

// add event listener to button for print result in console
buttonEl.addEventListener('click', function(){
  console.log(distanceEl.value);
  console.log(price);
  
  
 
})

