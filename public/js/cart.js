"use strict";


$(document)
    .ready(() => {
        let items = JSON.parse(localStorage.items).menuItems;
        items.forEach((item) => {
          item.quantity = null;
        })

        let order = [];
        let cartCount = null;

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
                      cartCount = order[myItem].quantity;
                      $('#chickenPotPieQuantity').text(`${order[myItem].quantity}`);
                    } else {
                      chickenPotPie.quantity = parseInt($("#dropdown1 option:selected").text());
                      order.push(chickenPotPie);
                      cartCount = chickenPotPie.quantity;
                      myItem = order.length - 1;
                      $('#cart').append(`<tr><td>${order[myItem].item_name}</td><td>${order[myItem].item_price}</td><td id="chickenPotPieQuantity">${order[myItem].quantity}</td></tr>`);
                    }
                    localStorage.cart = JSON.stringify(order);
                    // console.log("Order: ", order);
                    // console.log("Local Storage", JSON.parse(localStorage.cart));
                    $('#cartCount')
                        .text(cartCount);
                    console.log("Order: ", order[myItem]);
                  } else if (e.target.id === "2") {
                    chickenCasserole.quantity = parseInt($("#dropdown2 option:selected")
                        .text());
                    if (chickenCasserole.quantity !== 0) {
                        cartCount += chickenCasserole.quantity;
                    }
                    currentItem = chickenCasserole;
                    order.push(currentItem);
                    console.log("Order", order);
                    console.log("Local Storage", JSON.parse(localStorage.cart));
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                } else if (e.target.id === "3") {
                    doggieBeefStew.quantity = parseInt($("#dropdown3 option:selected")
                        .text());
                    if (doggieBeefStew.quantity) {
                        cartCount += doggieBeefStew.quantity;
                    }
                    currentItem = doggieBeefStew;
                    order.push(currentItem);
                    console.log("Order", order);
                    console.log("Local Storage", JSON.parse(localStorage.cart));
                    localStorage.cart = JSON.stringify(order);
                    $('#cartCount')
                        .text(cartCount);
                }
            });
    });
