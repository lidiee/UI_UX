$(function(){
    let layer = document.querySelectorAll(".layer")

    window.addEventListener("scroll",function(){
        let scroll = window.pageYOffset;

        layer.forEach(function(item,index){
            let speed = item.dataset.speed;
            item.style.transform = `translate3d(0,${scroll/speed*4}px,0)`
        })
    })
})