$(function(){
    $('.menu').on('click',function(){
        $(this).toggleClass('on');
    })

    // $('row-1').hover(function(){
    //     $('.txt-cont').css({
    //         'opacity': '1',
    //        ' transform':'scale(0.8,0.8)'
    //     })
    // })

    //tab
    var $container = $('.project_container');
    $container.isotope({
        filter: '*',
    });

    $('.project_filter a').click(function () {
        $('.project_filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
    });

    var $container = $('.portfolio_container');
    $container.isotope({
        filter: '*',
    });

    $('.project_filter a').click(function () {
        $('.project_filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
    });
})   