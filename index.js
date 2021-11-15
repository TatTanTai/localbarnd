

if(document.readyState == 'loadding') {
    document.addEventListener('DOMContent', start)
} else{
    start();
    
}


function start() {


    let slideProducts = document.querySelectorAll('.slideShop');
    for(let i = 0; i < slideProducts.length; i++) {
        slideProducts[i].classList.add(`slideShop${i+1}`); 
    }

    let slideDot = document.querySelectorAll('.nextandback span');
    for(let i = 0; i < slideDot.length; i++) {
        slideDot[i].classList.add(`slideDot${i+1}`); 
    }

    // let nextSlides = document.querySelectorAll('.slideShop');
    // for(let i = 0; i < nextSlides.length; i++) {
    //     nextSlides[i].addEventListener('click', nextSlide);
    // }


}

// var slideIndex = 0;
// function nextSlide() {
//     var images = document.querySelectorAll('.slideShop');
//     var nextDots = document.querySelectorAll('.nextandback span');
//     for(var i = 0; i < images.length; i ++){
//         images[i].style.display = 'none';
//     }
//     for(var i = 0; i < nextDots.length; i++)
//             nextDots[i].style.backgroundColor = 'gray';
//     slideIndex++;
//     if(slideIndex > images.length && slideIndex > nextDots.length){
//         slideIndex = 1;
//     }
//     images[slideIndex-1].style.display = 'block';
//     // imges[slideIndex-1].style.position = 0.5;
//     nextDots[slideIndex-1].style.backgroundColor = 'blue';
//     console.log(nextDots.length)
// }


let dots = document.querySelectorAll('.nextandback span');
let j = 0;
for(let i = 0; i < dots.length; i++){
    j++;
    let dotsBtn = dots[i].setAttribute('rel', j)
    dots[i].onclick = function(){
        let slideBtn = this.getAttribute('rel');
        console.log(slideBtn);
        let clickDots = document.querySelectorAll('.nextandback span');
        let slides = document.querySelectorAll('.slideShop');
        for(let i = 0; i < slides.length; i++)
            slides[i].style.display = 'none';
        let silde = document.querySelector(`.slideShop${slideBtn}`);
        console.log(silde)
        silde.style.display = 'block';
        for(let i = 0; i < clickDots.length; i++)
            clickDots[i].style.backgroundColor = 'white';
        let dot = document.querySelector(`.slideDot${slideBtn}`);
        dot.style.backgroundColor = 'black';
    }
}