var topMenu = document.querySelector(".block-top-menu");
var topMenuBtn = document.querySelector(".btn-top-menu");
   topMenuBtn.addEventListener("click", function(){
   topMenu.classList.toggle("block-top-menu-visible");
});

   topMenuBtn.addEventListener("click", function(){
    topMenuBtn.classList.toggle("top-menu-active");
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 40000,
        autoplaySpeed: 1000,
        fluidSpeed: true,
        autoplayHoverPause: true
    });
});
