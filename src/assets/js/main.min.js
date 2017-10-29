$(document).ready(function(){
    // dropdowns
    $('.has-dropdown').on('click', function(){
        $('.has-dropdown').removeClass('is-dropdown-open');
        $(this).addClass('is-dropdown-open');
    });

    // menu
    $('.menu-trigger').on('click', function(){
        $('html').toggleClass('is-menu-open');
    });

    // search
    $('.search').on('click', function(){
        $(this).addClass('is-search-active');
        $(this).find('input').focus();
    });

    // body events
    $('body').on('click touchend', function(e){
        // dropdowns
        if(!$(e.target).closest('.has-dropdown').length) {
            $('.has-dropdown').removeClass('is-dropdown-open');
        }
        // menu mobile
        if(!$(e.target).closest('.menu-trigger').length) {
          if(!$(e.target).closest('.header__top').length) {
            $('html').removeClass('is-menu-open');
          }
        }
        // search
        if(!$(e.target).closest('.search').length) {
            if($('.search input').val().length == 0) {
                $('.search').removeClass('is-search-active');
            }
        }
    });
});


