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
// function toggle(source) {
//     checkboxes = document.getElementsByName('foo');
//     for(var i=0, n=checkboxes.length; i<n; i++) {
//         checkboxes[i].checked = source.checked;
//     }
// }

var $checkAll = $('#checkAll');
$checkAll.change(function () {
    var $this = $(this);
    var checked = $this.prop('checked');
    $('input[name="foo"]').prop('checked', checked);
});
var boxes = $('input[name="foo"]');
boxes.change(function () {
//   var checkAll = true;
//   var count = boxes.length;
//   var i = 0;
//   for (; i < count; i++) {
//     if (!foo[i].checked) {
//       checkAll = false;
//       break;
//     }
//   }

var boxLength = boxes.length;
  // 체크된 체크박스 갯수를 확인하기 위해 :checked 필터를 사용하여 체크박스만 선택한 후 length 프로퍼티를 확인
  var checkedLength = $('input[name="foo"]:checked').length;
  var checkAll = (boxLength == checkedLength);

  $sportAll.prop('checked', checkAll);
});