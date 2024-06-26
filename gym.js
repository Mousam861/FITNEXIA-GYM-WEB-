
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var pause = document.querySelector(".pause")
var paus = document.querySelector(".page1butt h4")
var vdo = document.querySelector(".vdo video")
pause.addEventListener("click",function(){
    paus.innerHTML="Dbl Click to Stop"
   gsap.to(vdo,{
    opacity:1,
    duration:0.5
   })
   Vdo.play()
   vdo.load()
})
pause.addEventListener("dblclick",function(){
    paus.innerHTML="Watch Video"
    gsap.to(vdo,{
        opacity:0,
       })
       Vdo.pause();
})

document.querySelector(".romeo").addEventListener("click", () =>{
    scroll.scrollTo(0)
})