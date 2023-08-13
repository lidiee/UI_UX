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
    });

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

    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class");
        console.log(toggle);

        if( toggle == "toggle"){
            $(".toggle").addClass("active");
            // document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            $(".toggle").removeClass("active");
            // document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });

})