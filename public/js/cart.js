"use strict";


$(document)
    .ready(() => {
        let items = JSON.parse(localStorage.items).menuItems;
        items.forEach((item) => {
          item.quantity = null;
        })

        let order = [];
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

        // let chickenPotPie = {
        //     item_name: "Chicken Pot Pie",
        //     item_price: 45.00,
        //     id: 1,
        //     quantity: null
        // };
        // let chickenCasserole = {
        //     item_name: "Chicken Casserole",
        //     item_price: 25.37,
        //     id: 2,
        //     quantity: null
        // };
        // let doggieBeefStew = {
        //     item_name: "Doggie Beef Stew",
        //     item_price: 18.00,
        //     id: 3,
        //     quantity: null
        // };
        $('.addToCart')
            .click((e) => {
                if (e.target.id === "1") {
                  let itemInOrder = false;
                  let myItem = null;
                  order.forEach((item) => {
                    if (item.item_name === "Chicken Pot Pie") {
                      itemInOrder = true;
                      myItem = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[myItem].quantity += parseInt($("#dropdown1 option:selected").text());
                      updateCartQuantity();
                      $('#chickenPotPieQuantity').text(`${order[myItem].quantity}`);
                    } else {
                      chickenPotPie.quantity = parseInt($("#dropdown1 option:selected").text());
                      order.push(chickenPotPie);
                      updateCartQuantity();
                      myItem = order.length - 1;
                      $('#cart').append(`<tr id="chickenPotPie"><td class="item">${order[myItem].item_name}</td><td class="price">${order[myItem].item_price}</td><td id="chickenPotPieQuantity" class="quantity">${order[myItem].quantity}</td><td><i class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                    removeFromCart(myItem);
                  } else if (e.target.id === "2") {
                    let itemInOrder = false;
                    let myItem = null;
                    order.forEach((item) => {
                      if (item.item_name === "Chicken Casserole") {
                        itemInOrder = true;
                        myItem = order.indexOf(item);
                      }
                    });
                      if (itemInOrder === true) {
                        order[myItem].quantity += parseInt($("#dropdown2 option:selected").text());
                        updateCartQuantity();
                        $('#chickenCasseroleQuantity').text(`${order[myItem].quantity}`);
                      } else {
                        chickenCasserole.quantity = parseInt($("#dropdown2 option:selected").text());
                        order.push(chickenCasserole);
                        updateCartQuantity();
                        myItem = order.length - 1;
                        $('#cart').append(`<tr><td class="item">${order[myItem].item_name}</td><td class="price">${order[myItem].item_price}</td><td id="chickenCasseroleQuantity" class="quantity">${order[myItem].quantity}</td><td><i class="glyphicon glyphicon-remove"></i></td></tr>`);
                      }
                      localStorage.cart = JSON.stringify(order);
                      $('#cartCount')
                          .text(cartCount);
                } else if (e.target.id === "3") {
                  let itemInOrder = false;
                  let myItem = null;
                  order.forEach((item) => {
                    if (item.item_name === "Doggie Beef Stew") {
                      itemInOrder = true;
                      myItem = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[myItem].quantity += parseInt($("#dropdown3 option:selected").text());
                      updateCartQuantity();
                      $('#doggieBeefStewQuantity').text(`${order[myItem].quantity}`);
                    } else {
                      doggieBeefStew.quantity = parseInt($("#dropdown3 option:selected").text());
                      order.push(doggieBeefStew);
                      updateCartQuantity();
                      myItem = order.length - 1;
                      $('#cart').append(`<tr><td class="item">${order[myItem].item_name}</td><td class="price">${order[myItem].item_price}</td><td id="doggieBeefStewQuantity" class="quantity">${order[myItem].quantity}</td><td><i class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                } else if (e.target.id === "4") {
                  let itemInOrder = false;
                  let myItem = null;
                  order.forEach((item) => {
                    if (item.item_name === "Chicken and Rice") {
                      itemInOrder = true;
                      myItem = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[myItem].quantity += parseInt($("#dropdown4 option:selected").text());
                      updateCartQuantity();
                      $('#chickenAndRiceQuantity').text(`${order[myItem].quantity}`);
                    } else {
                      chickenAndRice.quantity = parseInt($("#dropdown4 option:selected").text());
                      order.push(chickenAndRice);
                      updateCartQuantity();
                      myItem = order.length - 1;
                      $('#cart').append(`<tr><td class="item">${order[myItem].item_name}</td><td class="price">${order[myItem].item_price}</td><td id="chickenAndRiceQuantity" class="quantity">${order[myItem].quantity}</td><td><i class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                } else if (e.target.id === "5") {
                  let itemInOrder = false;
                  let myItem = null;
                  order.forEach((item) => {
                    if (item.item_name === "Vegetable Soup") {
                      itemInOrder = true;
                      myItem = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[myItem].quantity += parseInt($("#dropdown5 option:selected").text());
                      updateCartQuantity();
                      $('#vegetableSoupQuantity').text(`${order[myItem].quantity}`);
                    } else {
                      vegetableSoup.quantity = parseInt($("#dropdown5 option:selected").text());
                      order.push(vegetableSoup);
                      updateCartQuantity();
                      myItem = order.length - 1;
                      $('#cart').append(`<tr><td class="item">${order[myItem].item_name}</td><td class="price">${order[myItem].item_price}</td><td id="vegetableSoupQuantity" class="quantity">${order[myItem].quantity}</td><td><i class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                } else if (e.target.id === "6") {
                  let itemInOrder = false;
                  let myItem = null;
                  order.forEach((item) => {
                    if (item.item_name === "Pot Roast with Vegetables") {
                      itemInOrder = true;
                      myItem = order.indexOf(item);
                    }
                  });
                    if (itemInOrder === true) {
                      order[myItem].quantity += parseInt($("#dropdown6 option:selected").text());
                      updateCartQuantity();
                      $('#potRoastWithVegetablesQuantity').text(`${order[myItem].quantity}`);
                    } else {
                      potRoastWithVegetables.quantity = parseInt($("#dropdown6 option:selected").text());
                      order.push(potRoastWithVegetables);
                      updateCartQuantity();
                      myItem = order.length - 1;
                      $('#cart').append(`<tr><td class="item">${order[myItem].item_name}</td><td class="price">${order[myItem].item_price}</td><td id="potRoastWithVegetablesQuantity" class="quantity">${order[myItem].quantity}</td><td><i class="glyphicon glyphicon-remove"></i></td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
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
        }

        $(".glyphicon-remove").on("click", (e) => {
          console.log(e);
        })
        function removeFromCart(myItem) {
          $(".glyphicon-remove").on("click", (e) => {
            $("#chickenPotPie").remove();
            order.splice(myItem);
            updateCartQuantity();
            localStorage.cart = JSON.stringify(order);
          })
        }

    });//End of document ready
