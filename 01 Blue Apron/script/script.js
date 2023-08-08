$(document).ready(function(){
    $(window).scroll(function(){
        let scrollY = $(window).scrollTop();
        if(scrollY > 500){
            $('#header_top').addClass("fixed")
        }else{
            $('#header_top').removeClass("fixed")
        }
        if(scrollY > 500){
            $('.gnb a').addClass("fixed")
        }else{
            $('.gnb a').removeClass("fixed")
        }
        if(scrollY > 500){
            $('.sign .sign_in a').addClass("fixed")
        }else{
            $('.sign .sign_in a').removeClass("fixed")
        }
    })

    const slider1 = $(".slider").bxSlider({
        controls:false,
        auto:true
    });
    $(".nextbtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".prevbtn").click(function(){
        slider1.goToPrevSlide();
    });

})