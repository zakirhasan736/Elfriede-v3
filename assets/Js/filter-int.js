$(document).ready(function() {
    var $cat_elf   = $('.elf-category-box');
    var $cat_trigger   = $('.elf-category-box');
    var active   = 'active'; // class
    // menu active close
    $cat_trigger.on( 'click', function() {
      if ( ! $cat_elf.hasClass( active ) ) {
        $cat_elf.addClass( active );
      } else {
        $cat_elf.removeClass( active );
      }
    });
 
    
    var $filter_elf   = $('.elf-filter-box');
    var $filter_trigger   = $('.elf-filter-box');
    var active   = 'active'; // class
    // menu active close
    $filter_trigger.on( 'click', function() {
      if ( ! $filter_elf.hasClass( active ) ) {
        $filter_elf.addClass( active );
      } else {
        $filter_elf.removeClass( active );
      }
    });

  
    var $priceSlider = $('#filter-price').slider({  min: 1000,  max: 10000, range: true, value: [1000, 10000] });
    var $starSlider = $('#filter-star').slider({  min: 1,  max: 5, range: true, value: [1, 5] });
  
    $priceSlider.on('slideStop', function(slideEvt){
      var $this =$(this);
      updateRangeSlider($this, slideEvt);
    });
    $starSlider.on('slideStop', function(slideEvt){
      var $this =$(this);
      updateRangeSlider($this, slideEvt);
    });
  
  });
