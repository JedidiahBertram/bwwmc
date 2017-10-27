$(document).ready(() => {
  "use strict";
  let order  = JSON.parse(localStorage.order);
  console.log(order);
  $('.orderInfo').append(['<h4 class="col-xs-6 col-xs-offset-3">Confirmation #: Insert ID here</h4>', `<h4 class="col-xs-6 col-xs-offset-3">Order date: ${new Date()}</h4>`, `<h4 class="col-xs-6 col-xs-offset-3">Delivery date: ${order.delivery_date}</h4>`, `<h4 class="col-xs-6 col-xs-offset-3">Delivery address: ${order.address} ${order.city}, ${order.state}</h4>`])
});
