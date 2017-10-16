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

    if (scroll > 300) {
      $('h2').addClass('fadeInDown')
      $('h2').addClass('showme')
    }
  })

  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll > 300) {
      $('#step-one').addClass('fadeInLeft')
      $('#step-one').addClass('showme')
    }
  })
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll > 650) {
      $('#step-two').addClass('fadeInRight')
      $('#step-two').addClass('showme')
    }
  })
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll > 1100) {
      $('#step-three').addClass('fadeInLeft')
      $('#step-three').addClass('showme')
    }
  })
});
