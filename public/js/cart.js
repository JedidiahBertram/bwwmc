"use strict";


$(document)
    .ready(() => {
      let items = JSON.parse(localStorage.items).menuItems;
      items.forEach((item) => {
        item.quantity = null;
        console.log(item);
      })
        let order = [];
        let currentItem = null;
        let cartCount = null;

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
                    chickenPotPie.quantity = parseInt($("#dropdown1 option:selected")
                        .text());
                    cartCount += chickenPotPie.quantity;
                    currentItem = chickenPotPie;
                    order.push(currentItem);
                    console.log("Order", order);
                    localStorage.cart = JSON.stringify(order);
                    console.log("Local Storage", JSON.parse(localStorage.cart));
                    $('#cartCount')
                        .text(cartCount);
                    $('#orderSummary').append("<li></li>").text(`${JSON.parse(localStorage.cart)[0].item_name}`)
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
