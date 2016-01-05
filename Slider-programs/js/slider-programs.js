$(document).ready(function(){

    	 $('.slider-programs').slick({
    		slidesToShow: 1,
    		centerMode: true,
    		centerPadding: '340px',
        arrows: false,
    		responsive: [
        {
          breakpoint: 1260,
          settings: {
            centerMode: true,
            centerPadding: '300px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1180,
          settings: {
            centerMode: true,
            centerPadding: '260px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1100,
          settings: {
            centerMode: true,
            centerPadding: '210px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1010,
          settings: {
            centerMode: true,
            centerPadding: '180px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 940,
          settings: {
            centerMode: true,
            centerPadding: '140px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 860,
          settings: {
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 760,
          settings: {
          	centerMode: true,
            centerPadding: '80px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 720,
          settings: {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 680,
          settings: {
            centerMode: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    	});

      

    	$('.slider-programs').on('beforeChange', function(slick, currentSlide, nextSlide){
    		
        var currentData = $(this).find('.slick-active').attr('data-slick-outer');

    	  $('.initiatives-slider[data-slick-inner="' + currentData + '"]').removeClass('active');
    	  $('.programs-slider .slick-prev').hide();
    	  $('.programs-slider .slick-prev').delay(250).fadeIn('0.1');
    	  $('.programs-slider .slick-next').hide();
    	  $('.programs-slider .slick-next').delay(250).fadeIn('0.1');

    	});

    	$('.slider-programs').on('afterChange', function(slick, currentSlide){

    		var currentData = $(this).find('.slick-active').attr('data-slick-outer');

    		$('.initiatives-slider[data-slick-inner="' + currentData + '"]').addClass('active');

    	});

		$('.slick-slide').click(function(){

			var currentSlide = $('.slider-programs').slick('slickCurrentSlide');

			var prevSlide = $('.slider-programs .slick-slide.slick-current').prev('.slick-slide').attr('data-slick-index');

			var nextSlide = $('.slider-programs .slick-slide.slick-current').next('.slick-slide').attr('data-slick-index');

			var thisNum = $(this).attr('data-slick-index');

			console.log('prevSlide ' + prevSlide);
			console.log('currentSlide ' + currentSlide);
			console.log('nextSlide ' + nextSlide);
			console.log('thisNum ' + thisNum);

			if(thisNum == prevSlide){
				$('.slider-programs').slick('slickPrev');
			}else if(thisNum == nextSlide){
				$('.slider-programs').slick('slickNext');
			}


		});
      
      $('.initiatives-slider').slick({
        dots: true,
        arrows: true,
        // draggable: true
      });

      // $('.initiatives-slider .slick-prev').clone.('.initiatives-slider .slick-dots');



});