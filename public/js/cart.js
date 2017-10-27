"use strict";


$(document)
    .ready(() => {
        let items = JSON.parse(localStorage.items).menuItems;
        items.forEach((item) => {
          item.quantity = null;
        });

        let order = localStorage.cart === undefined ? [] : (localStorage.cart === "undefined" ? [] : JSON.parse(localStorage.cart));

        let cartCount = null;
        let subTotal = "$0.00";

        let chickenPotPie = items.filter((item) => {
          return item.item_name === "Chicken Pot Pie";
        })[0];
        let chickenCasserole = items.filter((item) => {
          return item.item_name === "Chicken Casserole";
        })[0];
        let doggieBeefStew = items.filter((item) => {
          return item.item_name === "Doggie Beef Stew";
        })[0];
        let chickenAndRice = items.filter((item) => {
          return item.item_name === "Chicken and Rice";
        })[0];
        let vegetableSoup = items.filter((item) => {
          return item.item_name === "Vegetable Soup";
        })[0];
        let potRoastWithVegetables = items.filter((item) => {
          return item.item_name === "Pot Roast with Vegetables";
        })[0];

        updateCart();

        $('.addToCart')
            .click((e) => {
                if (e.target.id === "1") {
                  let itemInOrder = false;
                  let itemName = "chickenPotPie";
                  let itemIndex = null;
                  order.forEach((item) => {
                    if (item.item_name === "Chicken Pot Pie") {
                      itemInOrder = true;
                      itemIndex = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[itemIndex].quantity += parseInt($("#dropdown1 option:selected").text());
                      updateCartQuantity();
                      $('#chickenPotPieQuantity').text(`${order[itemIndex].quantity}`);
                    } else {
                      chickenPotPie.quantity = parseInt($("#dropdown1 option:selected").text());
                      order.push(chickenPotPie);
                      updateCartQuantity();
                      itemIndex = order.length - 1;
                      $('#cart').append(`<tr id=${chickenPotPie.item_name.split(' ').join('')}><td class="item">${order[itemIndex].item_name}</td><td class="price">${order[itemIndex].item_price}</td><td id="chickenPotPieQuantity" class="quantity">${order[itemIndex].quantity}</td><td><i id="1" class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                    $('.glyphicon-remove').click((e) => {
                      removeFromCart(e);
                    })
                  } else if (e.target.id === "2") {
                    let itemInOrder = false;
                    let itemName = "chickenCasserole";
                    let itemIndex = null;
                    order.forEach((item) => {
                      if (item.item_name === "Chicken Casserole") {
                        itemInOrder = true;
                        itemIndex = order.indexOf(item);
                      }
                    });
                      if (itemInOrder === true) {
                        order[itemIndex].quantity += parseInt($("#dropdown2 option:selected").text());
                        updateCartQuantity();
                        $('#chickenCasseroleQuantity').text(`${order[itemIndex].quantity}`);
                      } else {
                        chickenCasserole.quantity = parseInt($("#dropdown2 option:selected").text());
                        order.push(chickenCasserole);
                        updateCartQuantity();
                        itemIndex = order.length - 1;
                        $('#cart').append(`<tr id=${chickenCasserole.item_name.split(' ').join('')}><td class="item">${order[itemIndex].item_name}</td><td class="price">${order[itemIndex].item_price}</td><td id="chickenCasseroleQuantity" class="quantity">${order[itemIndex].quantity}</td><td><i id="2" class="glyphicon glyphicon-remove"></i></td></tr>`);
                      }
                      localStorage.cart = JSON.stringify(order);
                      $('#cartCount')
                          .text(cartCount);
                      $('.glyphicon-remove').click((e) => {
                        removeFromCart(e);
                      })
                } else if (e.target.id === "3") {
                  let itemInOrder = false;
                  let itemName = "doggieBeefStew";
                  let itemIndex = null;
                  order.forEach((item) => {
                    if (item.item_name === "Doggie Beef Stew") {
                      itemInOrder = true;
                      itemIndex = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[itemIndex].quantity += parseInt($("#dropdown3 option:selected").text());
                      updateCartQuantity();
                      $('#doggieBeefStewQuantity').text(`${order[itemIndex].quantity}`);
                    } else {
                      doggieBeefStew.quantity = parseInt($("#dropdown3 option:selected").text());
                      order.push(doggieBeefStew);
                      updateCartQuantity();
                      itemIndex = order.length - 1;
                      $('#cart').append(`<tr id=${doggieBeefStew.item_name.split(' ').join('')}><td class="item">${order[itemIndex].item_name}</td><td class="price">${order[itemIndex].item_price}</td><td id="doggieBeefStewQuantity" class="quantity">${order[itemIndex].quantity}</td><td><i id="3" class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                } else if (e.target.id === "4") {
                  let itemInOrder = false;
                  let itemName = "chickenAndRice";
                  let itemIndex = null;
                  order.forEach((item) => {
                    if (item.item_name === "Chicken and Rice") {
                      itemInOrder = true;
                      itemIndex = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[itemIndex].quantity += parseInt($("#dropdown4 option:selected").text());
                      updateCartQuantity();
                      $('#chickenAndRiceQuantity').text(`${order[itemIndex].quantity}`);
                    } else {
                      chickenAndRice.quantity = parseInt($("#dropdown4 option:selected").text());
                      order.push(chickenAndRice);
                      updateCartQuantity();
                      itemIndex = order.length - 1;
                      $('#cart').append(`<tr id=${chickenAndRice.item_name.split(' ').join('')}><td class="item">${order[itemIndex].item_name}</td><td class="price">${order[itemIndex].item_price}</td><td id="chickenAndRiceQuantity" class="quantity">${order[itemIndex].quantity}</td><td><i id="4" class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                    $('.glyphicon-remove').click((e) => {
                      removeFromCart(e);
                    })
                } else if (e.target.id === "5") {
                  let itemInOrder = false;
                  let itemName = "vegetableSoup";
                  let itemIndex = null;
                  order.forEach((item) => {
                    if (item.item_name === "Vegetable Soup") {
                      itemInOrder = true;
                      itemIndex = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[itemIndex].quantity += parseInt($("#dropdown5 option:selected").text());
                      updateCartQuantity();
                      $('#vegetableSoupQuantity').text(`${order[itemIndex].quantity}`);
                    } else {
                      vegetableSoup.quantity = parseInt($("#dropdown5 option:selected").text());
                      order.push(vegetableSoup);
                      updateCartQuantity();
                      itemIndex = order.length - 1;
                      $('#cart').append(`<tr id=${vegetableSoup.item_name.split(' ').join('')}><td class="item">${order[itemIndex].item_name}</td><td class="price">${order[itemIndex].item_price}</td><td id="vegetableSoupQuantity" class="quantity">${order[itemIndex].quantity}</td><td><i id="5" class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                    $('.glyphicon-remove').click((e) => {
                      removeFromCart(e);
                    })
                } else if (e.target.id === "6") {
                  let itemInOrder = false;
                  let itemName = "potRoastWithVegetables";
                  let itemIndex = null;
                  order.forEach((item) => {
                    if (item.item_name === "Pot Roast with Vegetables") {
                      itemInOrder = true;
                      itemIndex = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[itemIndex].quantity += parseInt($("#dropdown6 option:selected").text());
                      updateCartQuantity();
                      $('#potRoastWithVegetablesQuantity').text(`${order[itemIndex].quantity}`);
                    } else {
                      potRoastWithVegetables.quantity = parseInt($("#dropdown6 option:selected").text());
                      order.push(potRoastWithVegetables);
                      updateCartQuantity();
                      itemIndex = order.length - 1;
                      $('#cart').append(`<tr id=${potRoastWithVegetables.item_name.split(' ').join('')}><td class="item">${order[itemIndex].item_name}</td><td class="price">${order[itemIndex].item_price}</td><td id="potRoastWithVegetablesQuantity" class="quantity">${order[itemIndex].quantity}</td><td><i id="6" class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                    $('.glyphicon-remove').click((e) => {
                      removeFromCart(e);
                    })
                }
            });

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
          localStorage.subTotal = JSON.stringify(subTotal);
        }


        function updateCart() {
          order.forEach((item) => {
            $('#cart').append(`<tr id=${item.item_name.split(' ').join('')}><td class="item">${item.item_name}</td><td class="price">${item.item_price}</td><td class="quantity">${item.quantity}</td><td><i id=${item.id} class="glyphicon glyphicon-remove"></i></td></tr>`);
          });
          updateCartQuantity();
        }

        $('.glyphicon-remove').click((e) => {
          removeFromCart(e);
        })

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

      $(".scheduleDelivery").click((event) => {
        if (order.length !== 0) {
          window.location.href = 'orders/order_pay';
        } else {
          $('.emptyCart-modal-lg').modal('show');
        }
      });

    });//End of document ready
