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

/** scroll functions **/

$(window).scroll(function () {
    $("nav").attr("data-scrolled", $(this).scrollTop() > 0);
});
