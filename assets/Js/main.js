$(document).ready(function() {
    $('.elfriede-navigation-bar').on('click', function(){
        $('.elfriede-navigation-wrapper').addClass('info-open');
      })
      $('.elfriede-trigger-clos').on('click', function(){
        $('.elfriede-navigation-wrapper').removeClass('info-open');
      })
});