'use strict';
$(document).ready(() => {
  // adds 'opaque' class to the navbar.
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll > 360) {
      $('nav').addClass('opaque')
    } else {
      $('nav').removeClass('opaque')
    }
  })

  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll > 360) {
      $('h2').addClass('fadeInDown')
      $('h2').addClass('showme')
    }
  })

  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll > 500) {
      $('div#step-one').addClass('fadeInLeft')
      $('div#step-one').addClass('showme')
    }
  })
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll > 540) {
      $('div#step-two').addClass('fadeInRight')
      $('div#step-two').addClass('showme')
    }
  })
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll > 900) {
      console.log('Triggered');
      $('div#step-three').addClass('fadeInLeft')
      $('div#step-three').addClass('showme')
    }
  })
});
