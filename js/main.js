/** theme functions **/

$(document).ready(function () {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
});

function toggleTheme() {
    $(document.documentElement).toggleClass("dark");
    localStorage.theme = $(document.documentElement).hasClass("dark") ? "dark" : "light";
}

/** navbar functions **/

$(window).scroll(function () {
    $("nav").attr("data-scrolled", $(this).scrollTop() > 0);
});

$(window).on("resize", function () {
    if (window.innerWidth >= 1024) $("nav, #nav-collapse").attr("data-expanded", false);
});

function toggleNav() {
    $("nav, #nav-collapse").attr("data-expanded", $("nav, #nav-collapse").attr("data-expanded") != "true");
}

function scrollToElement(id) {
    var offset = $("#" + id).offset().top;
    var navbarHeight = 112;
    $(window).scrollTop(offset - navbarHeight);
    toggleNav();
}
