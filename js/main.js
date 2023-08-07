/** refresh functions **/

history.scrollRestoration = "manual";

$(window).on("beforeunload", function () {
    $(window).scrollTop(0);
});

/** theme functions **/

var themeColor;

$(document).ready(function () {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
        themeColor = "dark";
    } else {
        document.documentElement.classList.remove("dark");
        themeColor = "light";
    }
});

function toggleTheme() {
    $(document.documentElement).toggleClass("dark");
    localStorage.theme = $(document.documentElement).hasClass("dark") ? "dark" : "light";
}

/** navbar functions **/

$(window).scroll(function () {
    $("nav").attr("data-scrolled", $(this).scrollTop() > 0);
    if (themeColor === "dark") {
        $("meta[name='theme-color']").attr("content", $(this).scrollTop() > 0 ? "#1d1d1f" : "#000000");
    } else if (themeColor === "light") {
        $("meta[name='theme-color']").attr("content", $(this).scrollTop() > 0 ? "#f5f5f7" : "#ffffff");
    }
});

$(window).on("resize", function () {
    if (window.innerWidth >= 1024) $("nav, #nav-collapse").attr("data-expanded", false);
});

function toggleNav() {
    $("nav, #nav-collapse").attr("data-expanded", $("nav, #nav-collapse").attr("data-expanded") != "true");
}

/** email functions **/

function sendEmail() {
    var subject = $("#subject").val();
    var message = $("#message").val().split("\n").join("%0D%0A");
    var url = "mailto:jgiang.430@gmail.com?subject=" + subject + "&body=" + message;
    window.open(url);
    $("#subject").val("");
    $("#message").val("");
    alert("Email sent successfully.");
}
