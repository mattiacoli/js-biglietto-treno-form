// get variable from HTML
const distanceEl = document.getElementById('distance')
const ageEl = document.getElementById('age')
const buttonEl = document.querySelector('button')

console.log(distanceEl, ageEl, buttonEl);





// add event listener to button for print result in console
buttonEl.addEventListener('click', function () {

  // get variable for price and discounts to be applied
  const price = distanceEl.value * 0.21
  const discountUnder = price * 0.2
  const discontOver = price * 0.4

  if(ageEl.value < 18){
    console.log(discountUnder.toFixed(2));
    
  } else if (ageEl.value > 65){
    console.log(discontOver.toFixed(2));    
  } else {
    console.log(price.toFixed(2));
    
  }
  
})

