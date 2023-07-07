
function toggleTheme() {
    $('.brand-logo').toggleClass('d-none');
    $('.theme-toggle').toggleClass('d-none');
    $(document.documentElement).attr('data-bs-theme', function(index, theme) {
        return theme == 'light' ? 'dark' : 'light'
    });
}