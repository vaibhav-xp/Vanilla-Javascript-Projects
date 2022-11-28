const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.fa-angles-left');
const next = document.querySelector('.fa-angles-right');
const circle_1 = document.querySelector('.pt-1');
const circle_2 = document.querySelector('.pt-2');
const circle_3 = document.querySelector('.pt-3');

var counter = 1;
console.log(counter);
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

circle_1.style.opacity = "1";

const goPrev = () =>{
    counter--;
    ImageSlider();
}

const goNext = ()=>{
    counter++;
    ImageSlider();
}

const ImageSlider = () => {
    
    if( counter <= 0){
        counter = 3;
    }
    else if(counter >= 4){
        counter = 1;
    }

    console.log(counter);

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })

    pointColor();
}

const point_1 = () =>{
    counter = 1;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
    pointColor();
} 

const point_2 = () =>{
    counter = 2;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
    pointColor();
} 

const point_3 = () =>{
    counter = 3;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
    pointColor();
} 

const pointColor = () => {
    if(counter == 1){
        circle_1.style.opacity = "1";
        circle_2.style.opacity = "0.5";
        circle_3.style.opacity = "0.5";
    }
    if(counter == 2){
        circle_1.style.opacity = "0.5";
        circle_2.style.opacity = "1";
        circle_3.style.opacity = "0.5";
    }
    if(counter == 3){
        circle_1.style.opacity = "0.5";
        circle_2.style.opacity = "0.5";
        circle_3.style.opacity = "1";
    }
}