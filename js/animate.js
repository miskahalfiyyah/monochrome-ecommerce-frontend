jQuery( document ).ready( function($) {
  $( window ).scroll( function () {
    if ( $(document).scrollTop() > 50 ) {
      // Navigation Bar
      $('.navbar').removeClass('animate__animated animate__fadeIn bg-transparent');
      $('.navbar').addClass('animate__animated animate__fadeInDown nav-color');
      $('.nav-link').addClass('text-white');
    } else {
      $('.navbar').removeClass('animate__animated animate__fadeInDown nav-color');
      $('.nav-link').removeClass('text-white');
      $('.navbar').addClass('animate__animated animate__fadeIn bg-transparent');
    }
  });
});