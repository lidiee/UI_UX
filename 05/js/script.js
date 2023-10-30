$(document).ready(function(){
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