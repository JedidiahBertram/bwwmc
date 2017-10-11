$(document).ready(function(){

  let order = JSON.parse(localStorage.cart);

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

  $('.glyphicon-remove').click((e) => {
    removeFromCart(e);
  });

  function removeFromCart(e) {
    let itemIndex = null;
    order.forEach((item) => {
      if (item.id == e.target.id) {
        itemIndex = order.indexOf(item);
      console.log("Item name: ", item.item_name);
      $(`#${item.item_name.split(' ').join('')}`).remove();
      order.splice(itemIndex, 1);
      updateCartQuantity();
      localStorage.cart = JSON.stringify(order);
      console.log(order);
      }
    });
  };

  var todaysDate = new Date();
  var date_input=$('input[name="date"]'); //our date input has the name "date"
  var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
  var options={
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
    daysOfWeekDisabled: [0, 6],
    startDate: todaysDate,
  };
  date_input.datepicker(options);

  $('.recurrenceDD').hide();
  $('#recurringCB').click(function () {
      $( ".recurrenceDD" ).show( "slow", function() {
      });
  });

  $('#submitSchedule').click((e) => {
    order = [];
    localStorage.cart = JSON.stringify(order);
    console.log(JSON.parse(localStorage.cart));
  })


//The action for the submit button
//Gathers the schedule date and the status of the recurring delivery
//checkbox and the value of the schedule dropdown
function sendOrderToRoute(){
    var schedDate = $('.datePickerText').val();
    //var recurring = $('#recurringCB')[0].checked;
    //var ddVal = $('#recurrenceDD :selected').text();

    if(!schedDate){
      alert("Please schedule a delivery date");
    }

    var order = {
      'menuItemID': JSON.parse(localStorage.cart)[0].id,
      'quantity': JSON.parse(localStorage.cart)[0].quantity,
      'item_price': JSON.parse(localStorage.cart)[0].item_price,
      'schedDate': schedDate//,
      //'recurring': recurring,
      //'frequency': ddVal
    };

    console.log('view order = ', order);

    //ajax call to the appropriate route
    var request = $.ajax({
      url: "http://localhost:3000/orders",
      method: "POST",
      data: order,
      dataType: "json"
    });
  };
});
