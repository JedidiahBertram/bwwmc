$(document).ready(() => {
  function persistNewOrder {
  }
  // Make transparent navigation bar visible once the user scrolls past 200px
  $(window).scroll(() => {
    if($(this).scrollTop() > 200) {
      $('.navigation').addClass('opaque');
    }
    $('.navigation').removeClass('opaque');
  });
  $(window).scroll(() => {
    if($(this).scrollTop() > 200) {
      $('.navigation a').addClass('opaque');
    }
    $('.navigation a').removeClass('opaque');
  });


});
