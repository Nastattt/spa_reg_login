const slider = document.querySelector('.slider');
const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const slides = Array.from(document.querySelectorAll('.slide'));
const slidesLength = slides.length;
let slideIndex = 0;

prevbtn.addEventListener('click', goToPrevSLide)
nextbtn.addEventListener('click', goToNextSlide)

function goToPrevSLide(){
    slideIndex = slideIndex - 1;
    if (slideIndex < 0){
        slideIndex = slidesLength - 1;
    }
    showSlide(slideIndex);
}

function goToNextSlide(){
    slideIndex = slideIndex + 1;
    if (slideIndex >= slidesLength){
        slideIndex = 0;
    }
    showSlide();
}

function showSlide(){
    slides.forEach((slide, index) =>{
        if(index === slideIndex){
            slide.style.display = 'block'
        } else {
            slide.style.display = 'none'
        }
        
    })
}


// acc

const acc = document.querySelectorAll('.accordion');

for(let i=0; i<acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active')
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.cssText = `max-height: ${null}; padding: 0 30px;`
        } else {
            panel.style.cssText = `max-height: ${panel.scrollHeight+20}px; padding: 10px 30px;`
        }
    })
}


// burger


const menu = document.querySelector('.menu');
const span = document.querySelector('.menu-burger__header')

span.addEventListener('click', () => {
    menu.classList.toggle('active')
})


// Tabs
const btns = document.querySelectorAll('.tabs__btn')

btns.forEach( btn => {
    btn.addEventListener('click' ,() => {
        const Item  = document.querySelector('.tabs__block._active')
        const ItemBtn  = document.querySelector('.tabs__btn._active')

        if (Item) {
            Item.classList.remove('_active')
        }

        if (ItemBtn){
            ItemBtn.classList.remove('_active')
        }

        const nextItemBtn = `#${btn.getAttribute('data-tab')}`

        const nextItem = document.querySelector(nextItemBtn);

        btn.classList.add('_active');
        nextItem.classList.add('_active');
    })
})


const dino = document.querySelector('.dino')
const cactus = document.querySelector('.cactus')

document.addEventListener('keydown',function(event){
    jump();
})


function jump(){
    if (!dino.classList.contains('jump')){
        dino.classList.add('jump')
    }
    setTimeout(()=>dino.classList.remove('jump'), 500)
}

let isAlive = setInterval(() =>{
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusleft > 0 && cactusleft< 50 && dinotop >= 150){
        alert('game over')
    }
}, 20)
