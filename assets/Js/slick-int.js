
    // testimonials slider

    $('.elf-testimonials-slide-box')?.slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "cubic-bezier(.9, .03, .41, .49)",
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
         
        ]
      });

   // single product slider
$('.elf-product-slider')?.slick({
    dots:false,
    arrows: true,
    infinite:true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 1800,
    cssEase: "cubic-bezier(.7, .03, .41, .49)",
    nextArrow: '<span class="icon-right"><i class="fa-solid fa-angle-right"></i></span>',
    prevArrow: '<span class="icon-left"><i class="fa-solid fa-angle-left"></i></span>' ,
    speed: 1750,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite:true,
          dots:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });