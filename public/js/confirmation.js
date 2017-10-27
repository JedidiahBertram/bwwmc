$(document).ready(() => {
  "use strict";
  let order  = JSON.parse(localStorage.order);
  console.log(order);
  $('.orderInfo').append([`<h4 class="col-xs-8 col-xs-offset-2">Order date: ${new Date()}</h4>`, `<h4 class="col-xs-8 col-xs-offset-2">Delivery date: ${order.delivery_date}</h4>`, `<h4 class="col-xs-8 col-xs-offset-2">Delivery address: ${order.address} ${order.city}, ${order.state}</h4>`])
});
