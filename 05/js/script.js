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
function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function checkAll(source) {
    var checkboxes = document.getElementsByName('foo');
    var allChecked = true;

    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (!checkboxes[i].checked) {
            allChecked = false;
            break;
        }
    }

    document.getElementById('check').checked = allChecked;
}