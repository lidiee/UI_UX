$(document).ready(function(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView:1,
      
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        }
    });
    
    $(window).scroll(function(){
        let scrollY = $(window).scrollTop();
        console.log(scrollY);
    
        if(scrollY > 300){
            $(".navbar").addClass("fixed-top bg-dark px-lg-5")
        }else{
            $('.navbar').removeClass("fixed-top bg-dark px-lg-5")
        }
    });
    
    
    let winwidth = $(window).width;
    winSize();
    
    
    $(window).resize(function(){
        winwidth = $(window).width();
        console.log(winwidth);
    });
    
    function winSize(){
    
        let onView = true;
    
        if(winwidth < 768){
    
            $(".navbar-toggler").click(function(){
                // $(".navbar").toggleClass("onView")
                if(onView == true){
                    $(".navbar").addClass("onView");
                    onView = false;
                }else{
                    $(".navbar").removeClass("onView")
                    onView = true;
                }
            });
    
        }else{
    
            $(".navbar").removeClass("onView")
            $(".navbar-collapse").removeClass("show")
    
        }
    
    }
    
})