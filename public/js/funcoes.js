import $ from 'jquery';

$(document).ready(function() {

    $(".rollUp").on("click", function() {
        $('html').animate({ scrollTop: 0 }, 1000);
    });
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown({
        hover: true,
    });
    $('.slider').slider({
        indicators: false,
    });
    $('.modal').modal();
    $('.fixed-action-btn').floatingActionButton();
    $('.materialboxed').materialbox();

    rollUp();
    $(window).scroll(function() {
        rollUp();
    });

    function rollUp() {
        headerHeight = $("header").height();
        navHeight = $(".main-nav").height();
        sliderHeight = $(".slide-show").height();
        if ($(this).scrollTop() > (headerHeight + navHeight + sliderHeight))
            $(".rollUp").css("display", "block");
        else
            $(".rollUp").css("display", "none");
    }

});