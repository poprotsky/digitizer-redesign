$(document).ready(function(){

    $('.has-dropdown').on('click', function(){
        $('.has-dropdown').removeClass('is-dropdown-open');
        $(this).addClass('is-dropdown-open');
    });

    // body events
    $('body').on('click touchend', function(e){
        if(!$(e.target).closest('.has-dropdown').length) {
            $('.has-dropdown').removeClass('is-dropdown-open');
        }
    });
});


