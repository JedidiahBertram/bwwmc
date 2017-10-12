$(document).ready(function(){

  //Grab cart information from order and store it locally
  let order = JSON.parse(localStorage.cart);

  //Loop through the local order info and repopulate the cart info
  updateCart();

  function updateCart() {
    order.forEach((item) => {
      $('#cart').append(`<tr id=${item.item_name.split(' ').join('')}><td class="item">${item.item_name}</td><td class="price">${item.item_price}</td><td class="quantity">${item.quantity}</td><td><i id=${item.id} class="glyphicon glyphicon-remove"></i></td></tr>`);
    });
    $('.glyphicon-remove').click((e) => {
      removeFromCart(e);
    });
    updateCartQuantity();
  }

  //Loop through order info and sum all of the quantity properties on each item & update the cartCount property
  function updateCartQuantity() {
    let sum = null;
    for (let i = 0; i < order.length; i++) {
        sum += order[i].quantity;
    }
    cartCount = sum;
    $('#cartCount')
        .text(cartCount);
    orderSubTotal();
  }

  //Loop through the order info and sum the price * quantity for each item creating the subtotal for the cart
  function orderSubTotal() {
    $('#subTotal').append(`<td>$${subTotal}</td>`)
    let sum = 0;
    for (let i = 0; i < order.length; i++) {
        let price = order[i].item_price.split('');
        price.shift();
        price = price.join('');
        sum += price * order[i].quantity;
    }
    subTotal = sum;
    if (subTotal % 1 === 0) {
      $('#subTotal').text(`$${subTotal}.00`)
    } else {
      $('#subTotal').text(`$${subTotal}`)
    }
  }

  //Attach event listenter to delete glyphicon in the cart when the page loads
  //This is necessary for the case that the user comes back to the menu page from the schedule delivery page
  $('.glyphicon-remove').click((e) => {
    removeFromCart(e);
  });

  //Find the index of the order the user wants to delete and remove it from the DOM, local order,
  //and update localStorage
  function removeFromCart(e) {
    let itemIndex = null;
    order.forEach((item) => {
      if (item.id == e.target.id) {
        itemIndex = order.indexOf(item);
      $(`#${item.item_name.split(' ').join('')}`).remove();
      order.splice(itemIndex, 1);
      updateCartQuantity();
      localStorage.cart = JSON.stringify(order);
      }
    });
  };

  //Formatting for bootstraps date picker
  let todaysDate = new Date();
  let date_input=$('input[name="date"]'); //our date input has the name "date"
  let container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
  let options={
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
    orientation: "right",
    daysOfWeekDisabled: [0, 6],
    startDate: todaysDate,
  };
  date_input.datepicker(options);

  //Reset the order to an empty array
  //This should also make a post to the orders resource in the db
  $('#submitSchedule').click((e) => {
    localStorage.cart = JSON.stringify(order);
    order = [];
  });


  //Re-factor this to use the submit click event callback above
  //Check db for formatting requirements
  function sendOrderToRoute(){
      var schedDate = $('.datePickerText').val();

      //ajax call to the appropriate route
      var request = $.ajax({
        url: "http://localhost:3000/orders",
        method: "POST",
        data: order,
        dataType: "json"
      });
    };
});
