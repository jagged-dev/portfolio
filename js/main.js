$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
});

function scrollToTop() {
    $('.offcanvas .navbar-toggler').trigger('click');
    $(window).scrollTop(0);
}

function scrollToElement(id) {
    var elementOffset = $(id).offset().top;
    var navbarHeight = 112;
    var scrollAmount = elementOffset - navbarHeight;
    $('.offcanvas .navbar-toggler').trigger('click');
    $(window).scrollTop(scrollAmount);
}

function toggleTheme() {
    $('.brand-logo').toggleClass('d-none');
    $('.theme-toggle').toggleClass('d-none');
    $(document.documentElement).attr('data-bs-theme', function(index, theme) {
        return theme == 'light' ? 'dark' : 'light';
    });
}