$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer","Front-End Developer", "Editor", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Developer","Front-End Developer", "Editor", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    })

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    //toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //owl carousel
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nave:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }

        }

    });
});
//owl-carousel
// var hihi = document.querySelector("nav")
// window.addEventListener("scroll",function(){
//      if(this.scrollY > 20){
//     hihi.classList.add("sticky");
// }
// else{
//     hihi.classList.remove("sticky");
// }
// })



