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
      // ===================

    var buttonFilters = {};
    var buttonFilter = '*';

    var rangeFilters = {
        'price': {'min':1000, 'max': 10000},
        'star': {'min':1, 'max': 5}
      };
  

    var $grid = $('.grid').isotope({
      itemSelector: '.item',
      layout: 'masonry',
      filter: function() {
        var $this = $(this);
        var price = $this.attr('data-price');
        var star = $this.attr('data-star');
        var isInPriceRange = (rangeFilters['price'].min <= price && rangeFilters['price'].max >= price);
        var isInStarRange = (rangeFilters['star'].min <= star && rangeFilters['star'].max >= star);

        return $this.is( buttonFilter ) && (isInPriceRange && isInStarRange);
      }
    });
  
  
    var $priceSlider = $('#filter-price').slider({ tooltip_split: true, min: 1000,  max: 10000, range: true, value: [1000, 10000] });
    var $starSlider = $('#filter-star').slider({ tooltip_split: true, min: 1,  max: 5, range: true, value: [1, 5] });
  
  
    function updateRangeSlider(slider, slideEvt) {
      console.log('Current slider:' + slider);
      var sldmin = +slideEvt.value[0],
          sldmax = +slideEvt.value[1],

          filterGroup = slider.attr('data-filter-group'),

          currentSelection = sldmin + ' - ' + sldmax;
  
        slider.siblings('.filter-label').find('.filter-selection').text(currentSelection);
  
        console.log('Filtergroup: '+ filterGroup);
        rangeFilters[filterGroup] = {
          min: sldmin || 0,
          max: sldmax || 100000
        };

        $grid.isotope();
  
    }
  
    $priceSlider.on('slideStop', function(slideEvt){
      var $this =$(this);
      updateRangeSlider($this, slideEvt);
    });
    $starSlider.on('slideStop', function(slideEvt){
      var $this =$(this);
      updateRangeSlider($this, slideEvt);
    });
  
  
    $('.filters').on( 'click', '.btn', function() {

      var $this = $(this);
      var $buttonGroup = $this.parents('.btn-group');

      var filterGroup = $buttonGroup.attr('data-filter-group');

      buttonFilters[ filterGroup ] = $this.attr('data-filter');

      buttonFilter = concatValues( buttonFilters ) || '*';

      console.log( buttonFilter )

      $grid.isotope();
    });
  
  
    
    $('.btn-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', '.btn-filter', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
  
  });
  
  // Flatten object by concatting values
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }
  