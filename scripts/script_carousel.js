
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidersPerView: "auto",
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        sliderShadows: true
    },
    loop: true
});