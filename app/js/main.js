$(window).on('load', function(){

    $('.portfolio__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 320,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });


    $('.portfolio-photo__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 320,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });



    $('.question__text').animate({
        height: 'toggle',
        paddingBottom: 'toggle',
    }, 0);

    $('.faq__questions').on('click', function(event) {
        if ( $(event.target).hasClass('question__title') ) {
            $(event.target).next().animate({
                height: 'toggle',
                paddingBottom: 'toggle',
            }, 300);

            if ( $(event.target).hasClass('question__title_active') ) {
                $(event.target).removeClass('question__title_active')
            } else {
                $('.question__title_active').next().animate({
                    height: 'toggle',
                    paddingBottom: 'toggle',
                }, 300);
                $('.question__title_active').removeClass('question__title_active')
                $(event.target).addClass('question__title_active')
            }   
        }
    });

    $('.module__lessons').animate({
        height: 'toggle',
        paddingBottom: 'toggle',
        marginBottom: 'toggle',
        paddingTop: 'toggle',
    }, 0);

    $('.module__result').animate({
        height: 'toggle',
        paddingBottom: 'toggle',
        marginBottom: 'toggle',
        paddingTop: 'toggle',
    }, 0);

    $('.curriculum__list').on('click', function(event) {
        console.log(event.target);
        if ( $(event.target).hasClass('module__title') ) {
            $(event.target).parent().next().animate({
                height: 'toggle',
                paddingBottom: 'toggle',
                marginBottom: 'toggle',
                paddingTop: 'toggle',
                marginTop: 'toggle',
            }, 300);
            $(event.target).parent().next().next().animate({
                height: 'toggle',
                paddingBottom: 'toggle',
                marginBottom: 'toggle',
                paddingTop: 'toggle',
                marginTop: 'toggle',
            }, 300);

            if ( $(event.target).hasClass('module__title_active') ) {
                $(event.target).removeClass('module__title_active')
            } else {
                $(event.target).addClass('module__title_active')
            }   
        }

        if ( $(event.target).hasClass('module__subtitle') ) {
            $(event.target).parent().next().animate({
                height: 'toggle',
                paddingBottom: 'toggle',
                marginBottom: 'toggle',
                paddingTop: 'toggle',
                marginTop: 'toggle',
            }, 300);
            $(event.target).parent().next().next().animate({
                height: 'toggle',
                paddingBottom: 'toggle',
                marginBottom: 'toggle',
                paddingTop: 'toggle',
                marginTop: 'toggle',
            }, 300);

            if ( $(event.target).prev().hasClass('module__title_active') ) {
                $(event.target).prev().removeClass('module__title_active')
            } else {
                $(event.target).prev().addClass('module__title_active')
            }   
        }

        if ( $(event.target).hasClass('module__info') ) {
            $(event.target).next().animate({
                height: 'toggle',
                paddingBottom: 'toggle',
                marginBottom: 'toggle',
                paddingTop: 'toggle',
                marginTop: 'toggle',
            }, 300);
            $(event.target).next().next().animate({
                height: 'toggle',
                paddingBottom: 'toggle',
                marginBottom: 'toggle',
                paddingTop: 'toggle',
                marginTop: 'toggle',
            }, 300);

            if ( $(event.target).children('.module__title').hasClass('module__title_active') ) {
                $(event.target).children('.module__title').removeClass('module__title_active')
            } else {
                $(event.target).children('.module__title').addClass('module__title_active')
            }   
        }
    });
});