$(document).ready(() => {
  // Make transparent navigation bar visible once the user scrolls past 200px
  $(window).scroll(() => {
    if($(this).scrollTop() > 200) {
      $('.navigation').addClass('opaque');
    }
    $('.navigation').removeClass('opaque');
  });
  //
  // $(window).scroll(() => {
  //   if($(this).scrollTop() > 200) {
  //     $('.navigation a').addClass('opaque');
  //   }
  //   $('.navigation a').removeClass('opaque');
  // });


  // $(window).scroll(() => {
  //   const height = $(window).scrollTop();
  //   // if ($(this).scrollTop() > 300) {
  //   //   $('step-one').addClass('fadeInLeft');
  //   //   console.log('Event Fired');
  //   //
  //   // }
  //   console.log(height);
  //   if (height > 210) {
  //     $('step-one').addClass('fadeInLeft');
  //     console.log('Event Fired');
  //   }
  // })

});
