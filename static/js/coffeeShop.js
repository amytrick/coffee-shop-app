"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold; 
  // Make sure 'amountSold' variable is a whole num representing items sold and not price

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
$('.add-to-order').on('click',() => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
})

// setInterval(const progressBarLoop = (statusMsg) => {
  
//   for (let counter = 1; counter<6; counter +=1) {
//     let progressVal = 20 * counter;
//     setProgressAndStatus(progressVal, statusMsg);
//     setInterval
// }, 5000

// const progressBarLoop = (statusMsg) => {
  
//   for (let counter = 1; counter<6; counter +=1) {
//     let progressVal = 20 * counter;
//     setProgressAndStatus(progressVal, statusMsg);
//     setInterval
  
//   }
// }

// const move = () => {
//   const elem = document.getElementById("order-progress");   
//   let value = 0;
//   // var "order-status-message" = 'Please be patient... your coffee will be here soon!';
//   let id = setInterval(frame, 100);
//   const frame =() =>{
//     if (value == 100) {
//       clearInterval(id);
//     } else {
//       value++; 
//       // elem.style.value = value + '%'; 
//     }
//   }
// }

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        // elem.style.width = width + "%";
      }
    }
  }
}

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  // setProgressAndStatus (50, 'Please be patient... your coffee will be here soon!')
  move();
  
 
  resetCart();
})


// #********************************************