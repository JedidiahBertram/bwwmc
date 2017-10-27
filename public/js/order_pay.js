$(document).ready(function(){

  //Grab cart information from order and store it locally
  let order = localStorage.cart === undefined || "undefined" ? [] : JSON.parse(localStorage.cart);

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
    localStorage.subTotal = JSON.stringify(subTotal);
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

  //FORM VALIDATION and Order Submission
  let form = $('#needs-validation');
  let validName = false;
  let validEmail = false;
  let validAddress = false;
  let validForm = false;
  form.submit((event) => {
    if ($('#name').val().match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/) !== null) {
      if ($('#email').val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null) {
        if ($('#address').val().match(/^\d+\s[A-z]+\s[A-z]+/) !== null) {
          validForm = true;
        }
      }
    }
    if (!validForm) {
      event.preventDefault();
    } else {
      localStorage.cart = JSON.stringify(order);
      let acc = 1;
      let orderPost = {
        delivery_date: $('.datePickerText').val(),
        name: $('#name').val(),
        email: $('#email').val(),
        address: $('#address').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        zip_code: $('#zip').val(),
        total: JSON.parse(localStorage.subTotal)
      };
      for (let prop in order) {
          orderPost[`item_${acc}_name`] = order[prop].item_name;
          orderPost[`item_${acc}_price`] = order[prop].item_price;
          orderPost[`item_${acc}_quantity`] = order[prop].quantity;
          acc ++;
      }
      $.post("http://localhost:3000/orders", orderPost)
        .done((res) => {
          console.log(res);
      });
      localStorage.order = JSON.stringify(orderPost);
      localStorage.cart = undefined;
    }
  });

  bindEventListenersToForm();

  function bindEventListenersToForm() {
    // Name Field Validation
    $('#name').focus((event) => {
      $('#name').keydown((event) => {
        if ($('#name').val().match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/) === null) {
          $('#name').css({"border": "1px solid red"});
          $("#nameError").css({"visibility": "visible"});
        } else {
          $('#name').css({"border": "1px solid green"});
          $("#nameError").css({"visibility": "hidden"});
        }
      })
    });
    $('#name').blur((event) => {
      if ($('#name').val().match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/) === null) {
        $('#name').css({"border": "1px solid red"});
        $("#nameError").css({"visibility": "visible"});
      }
    });
    // EMAIL Field Validation
    $('#email').focus((event) => {
      $('#email').keydown((event) => {
        if ($('#email').val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
          $('#email').css({"border": "1px solid red"});
          $("#emailError").css({"visibility": "visible"});
        } else {
          $('#email').css({"border": "1px solid green"});
          $("#emailError").css({"visibility": "hidden"});
        }
      })
    });
    $('#email').blur((event) => {
      if ($('#email').val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
        $('#email').css({"border": "1px solid red"});
        $("#emailError").css({"visibility": "visible"});
      }
    });
    // ADDRESS Field Validation
    $('#address').focus((event) => {
      $('#address').keydown((event) => {
        if ($('#address').val().match(/^\d+\s[A-z]+\s[A-z]+/) === null) {
          $('#address').css({"border": "1px solid red"});
          $("#addressError").css({"visibility": "visible"});
        } else {
          $('#address').css({"border": "1px solid green"});
          $("#addressError").css({"visibility": "hidden"});
        }
      })
    });
    $('#address').blur((event) => {
      if ($('#address').val().match(/^\d+\s[A-z]+\s[A-z]+/) === null) {
        $('#address').css({"border": "1px solid red"});
        $("#addressError").css({"visibility": "visible"});
      }
    });
  };

});
