var menuButton = document.querySelector("#menu");
var closeButton = document.querySelector("#close");
var navopen = document.querySelector("#nav-open");
var page1 = document.querySelector("#page1");

menuButton.addEventListener("click", function() {
    navopen.style.display = "block";
    page1.style.display = "none";
});

closeButton.addEventListener("click", function() {
    navopen.style.display = "none";
    page1.style.display = "block";
});
